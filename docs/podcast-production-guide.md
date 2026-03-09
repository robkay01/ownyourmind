# Podcast Production Guide — Own Your Mind

Step-by-step checklist for producing each podcast episode. Follow in order.

Updated: 2026-03-09

---

## Prerequisites (one-time setup)

- [ ] ElevenLabs account with Rob's cloned voice (Creator plan, $22/mo) — **DONE**
- [ ] Audio editor installed (CapCut, DaVinci Resolve, or Audacity — all free)
- [ ] Podcast hosting account (Anchor/Spotify for Podcasters — free, or Transistor — $19/mo)
- [ ] Podcast artwork (3000x3000 square, 1400x1400 minimum) — generate via Venice API or use OYM branding
- [ ] RSS feed submitted to Apple Podcasts and Google Podcasts (Anchor handles Spotify automatically)

---

## Per-Episode Production Checklist

### 1. Script

- [ ] Agent Zero drafts script from existing project review
- [ ] Rob reviews and adjusts for voice/tone
- [ ] Save final script to `podcast-scripts/{project}-episode-{number}.md`
- [ ] Verify scores in script match editorial body text (use /100 scale, not /10 frontmatter)

### 2. Generate Audio — ElevenLabs

Open ElevenLabs Speech tool (or Projects for multi-section management).

**Generate section by section, not line by line** — it flows more naturally:

| Section | Timestamp | Voice |
|---------|-----------|-------|
| Intro | 0:00-1:00 | Rob (cloned voice) + Rachel (library voice) |
| What is [Project]? | 1:00-4:00 | Both |
| Freedom Score | 4:00-9:00 | Both |
| Returns Score | 9:00-14:00 | Both |
| Honest Assessment | 14:00-17:00 | Both |
| Outro | 17:00-18:00 | Rob |

For each section:
- [ ] Paste **ROB** lines → select cloned voice → generate → download MP3
- [ ] Paste **ALEX** lines → select library voice (Adam or Daniel) → generate → download MP3

**Voice selection for Rachel:** Use Rachel McGrath from the ElevenLabs library. Consistent across all episodes.

### 3. Edit Together

In your audio editor (CapCut / DaVinci Resolve / Audacity):

- [ ] Import all clips in script order
- [ ] Add 0.5-1s pause between speaker transitions
- [ ] Optional: add royalty-free intro music bed (5-10s, low volume)
- [ ] Optional: add royalty-free outro music bed (5-10s, low volume)
- [ ] Listen through full episode — check for awkward transitions, pacing issues
- [ ] Export as MP3, 128kbps, mono (speech doesn't need stereo)

**Free music sources:**
- Pixabay Audio (pixabay.com/music)
- Uppbeat (uppbeat.io — free tier)
- YouTube Audio Library (studio.youtube.com)

### 4. Upload to Podcast Host

**Anchor / Spotify for Podcasters (podcasters.spotify.com):**

- [ ] Upload MP3 file
- [ ] Set episode title (e.g. "Bittensor: Freedom at a Price?")
- [ ] Write episode description (use script SEO title options as starting point)
- [ ] Add chapter markers if platform supports them (use timestamps from script)
- [ ] Set episode number and season (Season 1 for now)
- [ ] Publish (or schedule)

### 5. Embed on Site

- [ ] Copy the embed URL from podcast host (Spotify embed, direct MP3, or widget URL)
- [ ] Provide URL to Claude Code to wire into project page
- [ ] Claude Code adds `podcastUrl` to project frontmatter and renders audio player

Player placement: below scores section, above editorial content.

### 6. Cross-Promote

- [ ] Link episode in next newsletter
- [ ] Post to X with link to project page (not just podcast link — drives site traffic)
- [ ] Update `editorial-plan.md` episode status to complete

---

## Episode File Naming

```
podcast-scripts/
  bittensor-episode-001.md
  morpheus-episode-002.md
  akash-episode-003.md
```

Audio files (local, before upload):
```
Own-Your-Mind-001-Bittensor.mp3
Own-Your-Mind-002-Morpheus.mp3
```

---

## Quality Checks

Before publishing each episode:

- [ ] Scores quoted match the editorial body text (use /100 scale)
- [ ] No outdated claims (check if anything changed since script was written)
- [ ] Audio levels consistent between Rob and Rachel voices
- [ ] No long silences or abrupt cuts
- [ ] Intro clearly states the project name and what the episode covers
- [ ] Outro directs listeners to ownyourmind.ai/projects/{slug}

---

## Pilot Phase Notes

For the first 2-3 episodes:
- Embed on project pages only — do NOT launch to podcast directories yet
- Validate: do visitors actually play the audio?
- Iterate on format, pacing, voice selection based on feedback
- Once validated, submit RSS to Spotify/Apple/Google for directory distribution

See `docs/podcast-strategy.md` for the full strategy and episode backlog.
