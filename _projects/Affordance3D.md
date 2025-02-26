---
title: "3D Neural Affordance Highlighter"
collection: projects
weight: 1 
excerpt: Exploring vision-language models for 3D affordance segmentation using CLIP-based textual supervision. <br/><br/> ![](/images/affordance.png)
---

## 3D Neural Affordance Highlighter
**Applying AI to localize affordance regions in 3D point clouds using vision-language models.**  

This project extends **neural affordance highlighting** to **3D point clouds**, investigating whether affordance regions can be identified using **CLIP-based textual supervision** without explicit 3D labels. It utilizes **multi-view rendering, differentiable rendering, and neural networks** to enhance segmentation accuracy.

![](/images/affordance.png)

📌 **[GitHub Repository](https://github.com/MelDashti/3D-Neural-Affordance-Highlighter)**  

---

### 🔹 **Key Highlights**
- **3D Affordance Localization**: Detects interaction affordances on household objects (e.g., doors, bottles, knives) without labeled supervision.
- **Vision-Language Integration**: Uses **CLIP embeddings** for affordance region identification.
- **Multi-View & Differentiable Rendering**: Improves spatial alignment of affordance predictions.
- **Grid Search Optimization**: Experimented with hyperparameters (learning rates, augmentations, network depth).
- **Performance Evaluation**: Assessed using **IoU and aIoU** for affordance-specific segmentation accuracy.

---

### 🛠 **Technologies Used**
- **CLIP (Contrastive Language-Image Pretraining)**
- **PyTorch, Differentiable Rendering**
- **Multi-View Learning, 3D AffordanceNet Dataset**
- **Evaluation Metrics: IoU, aIoU**
---

### 📸 **Sample Results**
<img src="/images/affordance.png" width="250"/>  


The **3D Neural Affordance Highlighter** explores how **vision-language models** can extend **affordance recognition to 3D environments**. By leveraging **differentiable rendering and CLIP embeddings**, the project demonstrates the potential for **unsupervised affordance detection** in 3D space.

