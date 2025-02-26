---
title: "3D Neural Affordance Highlighter"
collection: projects
weight: 1 
excerpt: Exploring vision-language models for 3D affordance segmentation using CLIP-based textual supervision. <br/><br/> ![](/images/affordance.png)
---

**Applying AI to localize affordance regions in 3D point clouds using vision-language models.**  

This project extends **neural affordance highlighting** to **3D point clouds**, investigating whether affordance regions can be identified using **CLIP-based textual supervision** without explicit 3D labels. It utilizes **multi-view rendering, differentiable rendering, and neural networks** to enhance segmentation accuracy.

![](/images/affordance.png)

📌 **[GitHub Repository](https://github.com/MelDashti/3D-Neural-Affordance-Highlighter)**  

---

### 🔹 **Key Highlights**
- **3D Affordance Localization** → Detects interaction affordances on household objects (e.g., doors, bottles, knives) without labeled supervision.
- **Vision-Language Integration** → Uses **CLIP embeddings** for affordance region identification.
- **Multi-View & Differentiable Rendering** → Improves spatial alignment of affordance predictions.
- **Grid Search Optimization** → Experimented with hyperparameters (learning rates, augmentations, network depth).
- **Performance Evaluation** → Assessed using **IoU and aIoU** for affordance-specific segmentation accuracy.

---

### 🛠 **Technologies Used**
- **Machine Learning** → CLIP, PyTorch
- **3D Processing** → Differentiable Rendering, Multi-View Learning
- **Dataset** → 3D AffordanceNet (22,949 objects, 23 classes, 18 affordance labels)
- **Evaluation Metrics** → IoU, aIoU, CLIP-based similarity scores

On this page I want to also include the report we wrote in CVPR format for this project.  
If the embedded PDF below does not load, you can <u><a href="https://meldashti.github.io/files/Affordance_Final_Report.pdf">download it here.</a></u>
<br />
<br />
<embed src="https://meldashti.github.io/files/Affordance_Final_Report.pdf" type="application/pdf" width="100%" />

---

The **3D Neural Affordance Highlighter** explores how **vision-language models** can extend **affordance recognition to 3D environments**. By leveraging **differentiable rendering and CLIP embeddings**, the project demonstrates the potential for **unsupervised affordance detection** in 3D space.
