---
title: "Pac-Man on LandTiger Board"
collection: projects
excerpt: Implementation of Pac-Man for the LandTiger LPC1768 development board with AI-driven ghosts, sound effects, and CAN bus communication. <br/><br/> ![](/images/pacman.png)
---

## Pac-Man on LandTiger Board
A **hardware-implemented version of Pac-Man**, developed as part of a **Computer Architecture course**, running on the **LandTiger LPC1768** development board. This version includes **AI-controlled ghosts, sound effects, and CAN bus communication** for real-time score tracking.

![](/images/pacman.png)

📌 **[GitHub Repository](https://github.com/MelDashti/PacMan-LandTiger)**  

---

### 🔹 **Key Features**
- **Joystick-controlled Pac-Man movement** for real-time gameplay.
- **AI-driven Ghost (Blinky)** using **Breadth-First Search (BFS)** pathfinding to chase Pac-Man.
- **Dynamic power pill mechanics** where Pac-Man can temporarily disable ghosts.
- **Sound effects & background music** through the board's speaker interface.
- **Game status display via CAN bus communication**, tracking score, lives, and countdown timer.
- **Pause/Resume functionality** via the INT0 button.

---

### 🛠 **Hardware & Software Details**
- **Development Board:** LandTiger LPC1768  
- **Programming Language:** C  
- **IDE:** Keil µVision  
- **AI Pathfinding:** Breadth-First Search (BFS) for ghost movement  
- **Audio:** Speaker interface for background music & sound effects  
- **CAN Bus Communication:** Displays current score, remaining lives, and countdown timer  

---

### 📸 **Screenshots**
<img src="/images/pacman.png" width="250"/>  
<img src="/images/pacman.png" width="250"/>  

---

This project showcases **low-level programming, AI-driven gameplay mechanics, and embedded system communication**. By integrating **AI, CAN bus communication, and sound processing**, it demonstrates how classic game mechanics can be adapted for **real-time embedded systems**.

