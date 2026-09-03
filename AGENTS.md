# AI Agent Architecture

Our system uses a deterministic Orchestrator managing specialized sub-agents.

## 1. Orchestrator Agent (The Watch Commander)
- **Role:** Receives raw inputs, distributes tasks to specialized sub-agents, and aggregates the final risk score.
- **Rule:** Never makes raw predictions; relies purely on confidence scores returned by sub-agents. 

## 2. Data Extraction Agent (The Clerk)
- **Role:** Extracts text and MRZ data.
- **Tools:** `TesseractOCR`, `EasyOCR`.
- **Constraint:** If text is blurry, do not guess. Return `CONFIDENCE_LOW` flag.

## 3. Forensic Agent (The Detective)
- **Role:** Scans image arrays for pixel manipulation, stamp forgery, and edge anomalies.
- **Tools:** `ResNet-Anomaly-Detector`, `ELA-Analyzer`.
- **Output:** Returns a JSON array of bounding boxes and threat probabilities.

## 4. Biometric Agent (The Bouncer)
- **Role:** Compares document portrait against live camera feed.
- **Tools:** `ArcFace`, `Liveness-Detector`.
- **Constraint:** Must enforce a strict cosine distance threshold of 0.60 for a positive match.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
