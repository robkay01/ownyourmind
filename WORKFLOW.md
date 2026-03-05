# Agent Zero ↔ Claude Code Workflow

## Division of Labor

| Task Type | Agent Zero | Claude Code |
|-----------|:----------:|:-----------:|
| **Research & Methodology** | ✅ Primary | ❌ |
| **Project Scoring** | ✅ Primary | ❌ |
| **Content Creation** | ✅ Primary | Assist |
| **Spec Creation** | ✅ Primary | ❌ |
| **Code Implementation** | Assist | ✅ Primary |
| **Frontend/Styling** | ❌ | ✅ Primary |
| **Git Operations** | ✅ Can do | ✅ Primary |
| **Bug Fixes** | ❌ | ✅ Primary |

## Workflow Stages

### Stage 1: Research & Scoring (Agent Zero)

Agent Zero produces:
- Project scores (Freedom + Returns)
- Research JSON records
- Methodology documentation
- Content drafts (articles, reviews)

**Output location:** `/content/` and `/data/` folders

### Stage 2: Spec Creation (Agent Zero)

Agent Zero creates detailed implementation specs:
- What files to modify
- What data to add
- What components to update
- Styling requirements

**Output location:** `/specs/` folder

### Stage 3: Implementation (Claude Code)

Claude Code reads specs and implements:
- Schema updates
- Component modifications
- Frontend changes
- Git commit & push

**Trigger:** User provides spec file or references Agent Zero output

### Stage 4: Review (Agent Zero)

Agent Zero verifies:
- Implementation matches spec
- Scores display correctly
- Content is accurate
- Mobile responsive

## File Locations

```
project/
├── CLAUDE.md                    # Claude Code instructions (existing)
├── WORKFLOW.md                  # This file
├── own-your-mind-research-plan.md  # Research protocol
├── returns-score-methodology.md # Returns Score rubric
├── /specs/                      # Agent Zero → Claude Code handoff
│   ├── dashboard-update-spec.md
│   └── ...
├── /content/                    # Agent Zero content output
│   ├── project-scores.json
│   └── ...
├── /data/                       # Shared data files
│   └── ...
└── /src/                        # Site source (Claude Code domain)
```

## Communication Pattern

```
User → Agent Zero: "Score all projects with Returns Score"
Agent Zero → /content/project-scores.json

User → Claude Code: "Implement Returns Score per /specs/returns-score-spec.md"
Claude Code → Modifies schema, components, commits

User → Agent Zero: "Review the implementation"
Agent Zero → Provides feedback or approval
```

## Key Principles

1. **Agent Zero creates, Claude Code implements**
2. **Specs are the handoff document**
3. **Both tools can read/write files**
4. **Git operations default to Claude Code**
5. **Agent Zero handles quality review**

---

*Last updated: March 2026*
