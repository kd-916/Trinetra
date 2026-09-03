# Mistakes & Pitfalls to Avoid

## 1. Never Trust the Client (Hardware)
- **Mistake:** Assuming the webcam or scanner will always send a perfectly lit, 1080p image.
- **Fix:** Implement robust pre-processing (auto-rotation, de-glare, contrast normalization) before sending images to the AI models.

## 2. Blocking the Main Thread
- **Mistake:** Running heavy AI models (like ResNet) synchronously, causing the UI to freeze for 10 seconds.
- **Fix:** All AI inferences must run asynchronously. Use websockets or SSE to push updates to the UI as they complete (e.g., "Face Match: Done", "Tamper Check: Loading...").

## 3. Over-Reliance on MRZ
- **Mistake:** Assuming the passport is real just because the MRZ checksums pass.
- **Fix:** MRZ generators are publicly available. Always force `Module 2` (MRZ) to cross-check against `Module 1` (VIZ text). If the MRZ says DOB is 1990 but the printed text says 1980, flag immediately.

## 4. Ignoring Racial/Age Bias in Biometrics
- **Mistake:** Using out-of-the-box face matching models trained only on specific demographics, leading to high false-rejection rates for certain groups.
- **Fix:** Ensure the biometric model is tested against diverse, globally representative datasets.

## 5. Generic Error Messages
- **Mistake:** Showing "Scan Failed" on the dashboard.
- **Fix:** Provide exact XAI feedback: "Scan Failed: Document angled too far left" or "Scan Failed: Glare detected on photo".