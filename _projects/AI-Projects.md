---
title: "Multiple projects regarding to Artificial Intelligence course"
collection: projects
---
***Designing and implementation of:***
- BFS, DFS, IDS, UCS (Uninformed Search Strategies)
- A star path finding in matrix
- Estate Price Predictor

# 1- A star & IDA star 8 puzzle solver
In this repo 8 Puzzle solver , solve your puzzle with A* and IDA*
* [Github repo](https://github.com/CenaAshoori/A-star-8-puzzle)

## 8 Puzzle Solver


### Quick Start :
Notice :
in 8 Puzzle ,we have an empty cell that move in available direction, and in this solver **_assume empty cell as 0_**



Define your **start** and **goal** matrix and **PASS IT** to the class
```python
    start = [
        [1, 2, 3],
        [4, 0, 5],
        [7, 8, 6],
    ]
    goal = [
        [1, 2, 3],
        [4, 5, 0],
        [7, 8, 6],
    ]
```
what u waiting for? **PASS IT**
``` python
Puzzle(start, goal, 1).solve()
```
OR if you want solve with IDA* 
```python
Puzzle(start, goal, 1).solve(is_idastar=True, iterate=4)
```
If you want to see the result add .print_path() 

```python
Puzzle(start, goal, 1).solve().print_path()
```
now you can see your console , The result came out.

----
Third variable in this solver is Alpha variable that determined that search algorithm be on of **THIS** :

- Uniform Cost (0)
- A* (1)
- Greedy (2)

```python
self.f = (2 - alpha) * self.g + alpha * (self.h)

# alpha = 0 (uniform cost)
self.f = 2 * self.g
# alpha = 1 (a*)
self.f = self.g + self.h
# alpha = 2 (greedy)
self.f = 2 * self.h
```

ALPHA is float variable and if you put it in range of this numbers:

- [x] [0 , 1] algorithm is OPTIMAL
- [ ] (1 , ∞) algorithm going to be GREEDY and it's NOT OPTIMAL

----
## What Is an Optimal Algorithm?
An OPTIMAL algorithm ,is an algorithm that **_all the TIME_** return the shortest path.
maybe also **Greedy** search give us the shortest path sometimes, but because in **Greedy** search always
exist possibility of finding NON-OPTIMAL path(a path that is not the shortest one), because its don't care about 
the cost that its already paid,so we can't guarantee the path be optimal.

You know , we want to be optimal , in ALL THE TIME.

## Why Greedy Search Isn't Optimal ?
Because it forgets its history and don't care about the Cost that its already paid, and it's just looking forward and
just care about **h cost(Heuristic)** value.

## What Is The Difference Between IDS(Iterative deepening Search) And IDA(Iterative deepening A*)? 

![img_1.png](https://github.com/CenaAshoori/A-star-8-puzzle/blob/main/img.png?raw=true)
(left = IDS  right = IDA*)

As you can see in above picture, in IDS(left) we put limitation on depth of search or actually on **G cost**,
but in IDA*(right) we put limitation on **F cost (g+h)**.



### 1- Heuristic One 
This heuristic return sum of all Manhattan Distance from current state to goal state.

This heuristic is better than next one , because it gives us more actual Estimation.
````python
    def h1(self, curent_mat, dic):
        counter = 0
        for row in range(len(self.mat)):
            for col in range(len(self.mat[0])):
                r, c = dic[curent_mat[row][col]]
                counter += abs(row - r) + abs(col - c)
        return counter
````


### 2- Heuristic Two
This heuristic just count all cells that are not in the correct Position(in comparison with goal state).


```python
    def h2(self, goal_mat):
        counter = 0
        for r in range(len(self.mat)):
            for c in range(len(self.mat[0])):
                if self.mat[r][c] != goal_mat[r][c]:
                    counter += 1
        return counter

```


---

# 2- A star path finding in matrix
In this repo we'll Find the shortest path in matrix (with Connected Edges and without it) by Uniform Cost , A* , Greedy
* [Github repo](https://github.com/CenaAshoori/A-star-path-finding-in-matrix)
## Quick start :

First of all
```python
pip install pygame
```
Than :
1. Create a matrix with this Type:
    
    - WALL = 1
    - START = 2
    - GOAL = 3
    
```python
    matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 3, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 2, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
    ]
```

2. Create an object of Astar class
```python
astar = Astar(matrix, 1)
```
3. Create Display object and pass astar to it and call show() method
```python
 Display(astar).show()
```
---
## ADDON
### Finding Path IN a Matrix With Connected Edges
```python
astar = Astar(matrix, 1, conected=True)
Display(astar).show()
```
![img.gif](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/connected.gif)

----
### 8 Direction 

```python
astar = Astar(matrix, 1, conected=True , eight_direction=True)
Display(astar).show()
```
![img.gif](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/8-dir.gif)

----
## Alpha
Second parameter in this solver is Alpha variable that determined that search algorithm be on of **THIS** :

- Uniform Cost (0)

Expand childrens by **g** cost
 ```python
astar = Astar(matrix, 0)
```
![img.gif](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/uniform-cost.gif)

----
- A* (1)
```python
astar = Astar(matrix, 1)
```
![img.gif](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/astar.gif)

----
- Greedy (2)
```python
astar = Astar(matrix, 2)
```
![img.gif](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/greedy.gif)

As you can see Uniform Cost and A star is optimal

----
### Heuristic: 
Pythagoras Formula
![img_1.png](https://github.com/CenaAshoori/A-star-path-finding-in-matrix/raw/main/images/pythagoras.png)
```python
self.h = ((abs(row_goal - row) ** 2) + abs(col_goal - col) ** 2) ** .5
```

---

# 3- Estate Price Predictor

AI course project that'll predict estate price by it's info like : location , area , rooms , ...
In this project we have Three column as input :
- X coordinate
- Y coordinate
- Price
 
[Github repo](https://github.com/CenaAshoori/Estate-Price-Predictor)

That the **X coordinate** and **Y coordinate** are input and the **Price** is the output of the application
 
|    x    |    y    |  price   |
| :-----: | :-----: | :------: |
| 37.3081 | 49.5835 | 30000000 |
|   ...   |   ...   |   ...    |
 
---
 
![ui.jpeg](https://github.com/CenaAshoori/Estate-Price-Predictor/raw/main/doc/ui.jpeg)
![ui.jpg](https://github.com/CenaAshoori/Estate-Price-Predictor/raw/main/doc/ui.jpg)
---
 
We have data that store in csv format and with **Sklearn** library in python we going to read data with **Pandas** library and use this rows as input for **LinearRegression** class that is one of the **sklearn** libraries. and then this class makes a relation between the raws and the output of the data and the result is some rule that will help us to predict the unknown estate price.
 
```python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LinearRegression
 
estate_data = pd.read_csv("estate_all.csv")
input_data = estate_data.drop(columns = ['price'])
output_data = estate_data['price']
model = LinearRegression()
model.fit(input_data , output_data)
 
```
We want to this model predict the price of the estate so all the columns is input except the **price** column . and then we call fit method on the model and pass input and output to the model and it’ll create a relation between the input and the output, and then we have a model that can predict.
 
```python
model.predict([[x_test , y_test]])
```
---
And also we check in this application that if the input data wasn't close to our real data, we shouldn't predict that estate because of this prediction probably is not good estimation.
 
 ```python
 x = estate_data['x']
y = estate_data['y']

def is_possible(x_test,y_test):
    for i in range(len(x)):
        dist = ((x[i]-x_test)**2 + (y[i]-y_test)**2)**0.5
        p = estate_data["price"][i]
        if dist < 0.02 :
            print(dist)
            prediction = model.predict([[x_test , y_test]])
            print(prediction)
            # format the price and seperate with ","
            print("{:,}".format(int(prediction[0])))
            return True
    return False

is_possible(37.2665,49.5815)
 ```
---
 
The issue of this project is data because calculating data from those of sites that already have information about estate is almost impossible and they'll load data dynamically and use react to load data and because of that we should have crawler that can load dynamic objects.
 
---
 
 
 
 


## 8 Puzzle solver using A* & IDA (Informed `Heuristic` Search Strategies)

- [Github repo](https://github.com/benymaxparsa/8-Puzzle-Solver-AStar-IDA)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ySN5Wnu88nE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
