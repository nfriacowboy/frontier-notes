# Frontier Notes

A personal technical blog focused on **AI governance, security, and emerging technology**, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## About

Frontier Notes explores the intersection of artificial intelligence, policy, and engineering — with a particular focus on practical governance challenges, security implications, and the evolving relationship between humans and AI systems.

All AI-generated or AI-assisted posts are marked with an **AI Disclosure** badge.

Live site → **[nfriacowboy.github.io/frontier-notes](https://nfriacowboy.github.io/frontier-notes/)**

---

## Technology stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v5 (static, Content Collections, MDX) |
| Hosting | GitHub Pages (deployed via GitHub Actions) |
| Diagrams | Mermaid (rendered at build time via `rehype-mermaid`) |
| Syntax highlighting | Shiki (`github-dark` theme) |
| Package manager | pnpm |

---

## AI tooling

This blog uses a private management system that integrates several AI services to assist in research, writing, and image creation. No AI model generates content without human review and approval.

### Language models

| Model | Role |
|---|---|
| `command-r:35b` (Ollama, local) | Primary content generation — purpose-built for RAG and citations, 128K context |
| Claude API (Anthropic) | Cloud fallback and preference-based generation |

### Image generation

Images are generated locally using **ComfyUI** with AMD ROCm, using **Flux.1-schnell** as the default model. All generated images are reviewed before publication.

### Reference management

The bibliography pipeline is powered by **Zotero** (cloud API). References are synced, embedded with `nomic-embed-text`, and stored in a **pgvector** database for semantic search (RAG). When writing a post, the relevant sources are retrieved and provided to the language model as grounded context — the model is instructed to cite them inline rather than hallucinate references.

---

## Content workflow

```
Research → Draft → Review → Image → Publish
```

1. **Research** — sources are gathered from the Zotero library (semantic RAG search), DuckDuckGo web search, and RSS feeds. Full article text is fetched per reference to build a grounded context window.

2. **Draft generation** — a title/intent and the reference context are sent to the LLM. The model produces a structured post with inline citations and a reference list, grounded in the provided sources.

3. **Review** — the draft is edited in a Markdown editor. AI suggestions for improvements, subtitle, excerpt, and tags are available but always presented as a comparison for human approval before applying.

4. **Image generation** — a prompt is generated from the post content and sent to ComfyUI (Flux.1-schnell). The image is reviewed and attached to the post.

5. **Publish** — posts are published by syncing the management system with this repository in a single atomic commit, covering all pending changes (new posts, updates, unpublished drafts).

---

## Publishing integrations

| Service | Purpose |
|---|---|
| GitHub Pages | Hosting (auto-deploy on push to `main`) |
| LinkedIn | Post announcements *(planned)* |
| Slack | Internal notifications *(planned)* |

---

## AI disclosure policy

Posts that were drafted, improved, or substantially assisted by AI are tagged with an `aiDisclosure: true` frontmatter field, which renders a visible disclosure notice on the post page. The intent, structure, and factual review remain human-driven.

---

## License

- **Source code** (Astro config, components, layouts, pages, styles) — [MIT License](LICENSE)
- **Content** (blog posts in `src/content/`, images in `public/`) — [CC BY-NC-ND 4.0](LICENSE-CONTENT)
