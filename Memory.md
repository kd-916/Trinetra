# Memory & State Management

## 1. Short-Term Memory (Session State)
- **Storage:** Redis (TTL: 15 minutes)
- **Purpose:** Holds the current passenger's temporary data (live camera frames, raw document scans) while they are standing at the booth.
- **Lifecycle:** Created on scan. Destroyed when Officer clicks `Approve` or `Reject`.

## 2. Long-Term Memory (Audit & Evidence)
- **Storage:** PostgreSQL + S3 Compatible Blob Storage.
- **Purpose:** Immutable Chain of Custody.
- **Rule:** If cleared, PII is scrubbed, and only anonymized metadata (nationality, time, lane) is kept for analytics. If flagged/rejected, full data packet is encrypted and locked in the Evidence locker indefinitely.

## 3. Vector Memory (Watchlists)
- **Storage:** Milvus / Qdrant.
- **Purpose:** Stores 512-dimensional embeddings of known fraudsters or multiple aliases.
- **Action:** Live face embedding is queried against this memory bank using Approximate Nearest Neighbor (ANN) search within 50ms.