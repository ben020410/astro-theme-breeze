---
title: "Zero-Shot Object Navigation Using Semantic Scene Descriptions and Dynamic Decision-Making"
subtitle: "KRoC 2026 Proceedings"
createdAt: 2026-02-01
category: robotics-ai
tags: [Embodied-AI, VLM, Zero-Shot-Navigation, Robotics]
summary: VLM-based zero-shot object navigation framework using semantic scene descriptions, dynamic observation, and target verification.
---

![Zero-Shot Object Navigation Framework](./img/image_4.png)

Zero-shot object navigation framework designed to reduce the **text-image modality gap** in vision-language-based navigation.

The approach represents panoramic observations through semantic scene descriptions and dynamically invokes additional visual reasoning at uncertain navigation points. It was evaluated on **Habitat-Matterport 3D(HM3D) & Matterport 3D(MP3D)** environments.

---

### 👤 My Role

**Co-Author · Research & Implementation**

- Collaborated on the overall **navigation framework and model architecture**
- Jointly implemented and iterated on the navigation pipeline with the research team
- Contributed to technical discussions, debugging, and experimental development
- Co-authored the resulting KRoC 2026 paper

---

### 🔧 Research Contributions

- **Semantic Scene Representation**  
  Generated panoramic scene descriptions using **GPT-4o** and used text-based representations to improve semantic relevance matching during navigation.

- **Dynamic Decision-Making**  
  Introduced a rotation-trigger mechanism that selectively activates panoramic observation at uncertain decision points instead of continuously invoking it.

- **Target Verification**  
  Combined contextual VLM re-evaluation with cumulative detections to reduce persistent false-positive target predictions.

---

### 📊 Benchmark Results

The framework achieved **55.0% Success Rate (SR)** and **33.7% Success weighted by Path Length (SPL)** on HM3D.

Compared with the VLFM baseline in the reported evaluation, SPL improved by approximately **3.3 percentage points**.

---

### 🏛️ Publication

- **Venue:** 21st Korea Robotics Society Annual Conference (KRoC 2026)
- **Society:** Korea Robotics Society (KROS)
- **Grant Support:** Samsung Research Funding & Incubation Center of Samsung Electronics / Project No. `SRFC-IT2402-17`
- **Authors:** Yeongmok Cho, **Semin Na**, Jeongjun Choi, H. Jin Kim
- **Role:** Co-Author / Research & Implementation

---

🔗 **Paper:** <a href="/KRoC2026_ZSON.pdf" target="_blank" rel="noopener noreferrer">KRoC 2026 Paper</a>