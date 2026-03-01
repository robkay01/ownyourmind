import { useEffect, useRef, useState, useCallback } from 'react';

interface SearchResult {
  url: string;
  meta: { title?: string };
  excerpt: string;
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagefind, setPagefind] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load Pagefind on first open
  const loadPagefind = useCallback(async () => {
    if (pagefind) return pagefind;
    try {
      // @ts-ignore — Pagefind is loaded from the built output
      const pf = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
      await pf.init();
      setPagefind(pf);
      return pf;
    } catch (e) {
      console.warn('Pagefind not available (run a full build first):', e);
      return null;
    }
  }, [pagefind]);

  // Open/close
  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setResults([]);
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  // Keyboard shortcut: Ctrl+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          open();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, open, close]);

  // Wire up the nav search button
  useEffect(() => {
    const btns = document.querySelectorAll('[aria-label="Search"]');
    btns.forEach(btn => {
      btn.addEventListener('click', open);
    });
    return () => {
      btns.forEach(btn => {
        btn.removeEventListener('click', open);
      });
    };
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      loadPagefind();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, loadPagefind]);

  // Search
  useEffect(() => {
    if (!query || !pagefind) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const search = await pagefind.search(query);
        const loaded = await Promise.all(
          search.results.slice(0, 12).map((r: any) => r.data())
        );
        setResults(loaded);
        setSelectedIndex(0);
      } catch (e) {
        console.error('Search error:', e);
      }
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query, pagefind]);

  // Keyboard navigation in results
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Scroll selected into view
  useEffect(() => {
    if (resultsRef.current) {
      const selected = resultsRef.current.children[selectedIndex] as HTMLElement;
      selected?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 rounded-xl border shadow-2xl overflow-hidden"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderColor: 'var(--color-border)',
          boxShadow: '0 0 60px rgba(13, 148, 136, 0.1)',
        }}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, projects, guides..."
            className="flex-1 bg-transparent text-base outline-none"
            style={{ color: 'var(--color-text-primary)' }}
          />
          <kbd
            className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] border"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={resultsRef}
          className="max-h-[50vh] overflow-y-auto"
          style={{ scrollbarWidth: 'thin' }}
        >
          {isLoading && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              Searching...
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              No results found for "{query}"
            </div>
          )}

          {!isLoading && !query && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              Start typing to search across all content
            </div>
          )}

          {results.map((result, i) => (
            <a
              key={result.url + i}
              href={result.url}
              className="block px-4 py-3 no-underline transition-colors"
              style={{
                backgroundColor: i === selectedIndex ? 'var(--color-bg-tertiary)' : 'transparent',
                borderBottom: '1px solid var(--color-border)',
              }}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <div className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {result.meta?.title || 'Untitled'}
              </div>
              <div
                className="mt-1 text-xs leading-relaxed line-clamp-2"
                style={{ color: 'var(--color-text-tertiary)' }}
                dangerouslySetInnerHTML={{ __html: result.excerpt }}
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="flex items-center justify-between px-4 py-2 border-t text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-tertiary)' }}>
            <span>{results.length} results</span>
            <div className="flex items-center gap-2">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
