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