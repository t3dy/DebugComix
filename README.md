# Vibe Coding Lessons: Building Reliable AI Systems

**Live site:** [https://t3dy.github.io/DebugComix/](https://t3dy.github.io/DebugComix/)

A series of 13 instructional comics about AI engineering, Python tool calling, and reliable agent workflows. Each comic pairs a visual metaphor with a concrete explanation of how AI coding tools actually work — and what goes wrong when you skip the engineering discipline.

## How This Site Was Conceived and Built

This project emerged from a real experience building a large AI-assisted dictionary website using Claude Code. Over multiple sessions, I used agent swarms, batch generation, and automated pipelines to create hundreds of structured entries. Along the way, I encountered every failure mode that AI-assisted development can produce: runaway agents editing hundreds of files simultaneously, context window overflow losing earlier instructions, crashed sessions leaving zombie processes, and prompts that were too vague to produce consistent results.

After reflecting on what went wrong, I had a long analytical conversation with Claude about the architecture of reliable AI workflows. That conversation produced a structured critique of my process: where I let the agent wear too many hats at once, where deterministic scripts should have replaced LLM calls, where hooks and validation gates would have caught errors early, and where externalized state files would have prevented memory loss across sessions.

The critique naturally suggested a visual learning format. Each failure mode mapped to a clear engineering principle, and each principle could be illustrated as a comic panel. I designed a two-panel template inspired by XKCD's accessibility, Edward Tufte's information density, and circuit-diagram aesthetics. The left panel presents the concept as a metaphorical comic; the right panel shows what it looks like in an actual Claude Code / terminal / IDE interface.

The images were generated using ChatGPT's DALL-E image generation based on detailed panel-by-panel design specifications. Each design was written out as a full spec before generation — specifying characters, layout, annotations, interface elements, and captions. This approach itself demonstrated the principles being taught: bounded tasks with clear specifications produce better results than open-ended creative prompts.

The website was then built by feeding the complete set of images and lesson text to Claude Code as a single structured prompt. Claude Code created the static site with JSON-driven rendering, responsive CSS, and tab navigation between the comic lessons and the blow-by-blow process narrative.

## What the Comics Teach

| # | Comic | Principle |
|---|-------|-----------|
| 1 | The Hook Guardians | Hooks enforce validation automatically instead of relying on memory |
| 2 | The Claude Skills Arsenal | Modular skills beat monolithic prompts |
| 3 | The Two Brains of an AI System | Separate deterministic scripts from probabilistic LLM reasoning |
| 4 | The Deterministic Pipeline | Pipelines provide composability and debugging clarity |
| 5 | Probabilistic Reasoning | LLM outputs are suggestions, not authoritative results |
| 6 | The Too-Many-Hats Problem | One phase per prompt — don't let the agent juggle roles |
| 7 | Conversation Memory vs Repo Memory | Externalize state into repo files, not chat history |
| 8 | Scripts vs LLM: Task Automation Breakdown | Python handles structure, LLMs handle meaning |
| 9 | Uncontrolled Editing vs Structured Output | Emit structured data, merge with deterministic scripts |
| 10 | Sequential Agents vs Swarms | Controlled batching beats parallel chaos |
| 11 | Inside the Sandbox: Path Restrictions | Constrain writable scope with explicit allowlists |
| 12 | The Testable Prompt vs The Vague Prompt | Declare inputs, outputs, constraints, and stop conditions |
| 13 | The Agent Swarm Strike Team | Specialized agent roles outperform one-agent-does-everything |

## The Blow-by-Blow Section

The second tab on the site narrates the full prompt engineering process with each entry illustrated by its corresponding comic. The 13 sections cover:

1. What Claude Code actually does under the hood (agent loops, not continuous thought)
2. How subagents create instability
3. Context compaction and memory loss
4. The too-many-hats problem and role drift
5. Deterministic scripts vs LLM reasoning
6. Why open-ended loops fail
7. The power of hooks
8. Skills as modular tools
9. The illustration design process
10. Treating the agent as a pipeline component
11. How the comics were made
12. Building the website with its own lessons
13. From vibe coding to engineered workflows

## Key Takeaways

1. Claude Code runs an agent loop — read, plan, tool, observe, revise — not continuous thought
2. Subagents multiply process overhead and failure risk
3. Context compaction means earlier instructions can be lost
4. Separate phases of work instead of mixing roles in one session
5. Deterministic scripts should handle anything rule-based
6. LLMs should only write text requiring synthesis
7. Batch processing with validation gates is safer than open-ended loops
8. Hooks enforce rules as code, not rules as suggestions
9. External files should hold project state instead of chat memory
10. The pipeline is the system — the agent is just one worker inside it

## Site Structure

```
site/
  index.html
  style.css
  data/
    lessons.json          # 13 comic lesson entries
    process.json          # 13 blow-by-blow narrative entries (illustrated)
  images/
    hooks_guardians.png
    claude_skills_arsenal.png
    two_brains_ai_system.png
    deterministic_pipeline.png
    probabilistic_reasoning.png
    too_many_hats.png
    conversation_vs_repo_memory.png
    scripts_vs_llm.png
    uncontrolled_editing_vs_structured.png
    sequential_vs_swarms.png
    sandbox_path_restrictions.png
    testable_vs_vague_prompts.png
    agent_swarm_strike_team.png
  js/
    render.js             # Loads JSON and renders both sections
```

## Running Locally

Serve the `site/` directory with any static server:

```bash
cd site
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## License

Educational content. Images generated with DALL-E. Text and code by the author with AI assistance.
