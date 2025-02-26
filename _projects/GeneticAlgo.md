---
title: "Genetic Programming for Formula Evolution"
collection: projects
weight: 4
excerpt: A tree-based genetic programming system to evolve mathematical formulas that predict outcomes from numerical datasets. <br/><br/> ![](/images/genetic_programming/coverpic.png)
---

## Genetic Programming for Formula Evolution
A **symbolic regression system** that uses **genetic programming** to automatically discover mathematical formulas for predicting numerical outcomes. The project evolves mathematical expressions by minimizing **Mean Squared Error (MSE)** while balancing accuracy and complexity.

![](/images/genetic_programming/coverpic.png)

📌 **[GitHub Repository](https://github.com/MelDashti/CI2024_project-work)**  

---

### 🔹 **Key Features**
- **Tree-Based Genetic Programming** → Evolves hierarchical mathematical expressions.
- **Optimized Evolutionary Process** → Selection, crossover, and mutation to improve formula accuracy.
- **Symbolic Simplification** → Uses **SymPy** to refine evolved formulas for better readability.
- **Configurable Parameters** → Adjustable **mutation rates, crossover rates, and selection mechanisms**.
- **Bloat Control & Parsimony** → Prevents unnecessary formula complexity while maintaining accuracy.

---

### 🛠 **Technologies Used**
- **Python, NumPy** (Vectorized numerical operations)  
- **SymPy** (Symbolic manipulation & formula simplification)  
- **Genetic Programming** (Tree-based evolution of mathematical expressions)  
- **Mean Squared Error (MSE)** (Primary fitness evaluation metric)  

---

### 📊 **Optimization & Results**
- **Performance Analysis** → Tuned **mutation (0.3) and crossover (0.7) rates** for optimal results.
- **Formula Complexity vs. Accuracy Tradeoff** → Adjusted parsimony to balance expression length and prediction quality.
- **Dataset Generalization** → Experimented across multiple datasets, refining hyperparameters dynamically.
- **Best Evolution Strategies Identified** → Fine-tuned selection mechanisms like **tournament selection with elitism**.

---

---

### **Conclusion**
This project demonstrates **evolutionary computing and genetic programming applied to symbolic regression**. By combining **tree-based expression evolution, symbolic simplification, and genetic optimization**, it effectively discovers mathematical models that generalize across numerical datasets.
