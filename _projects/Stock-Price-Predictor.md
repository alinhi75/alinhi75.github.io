---
title: "Multiple projects regarding to Data Structures and Algorithms course"
collection: projects
---
***Designing and implementation of:***
- the Trie Dictionary (k-ary search tree)
- the Rat in the maze problem (Backtracking & Stacks)


## 1- Maze-Solver
* [Github repo](https://github.com/CenaAshoori/Maze-Solver)

This maze moves to 8 directions
also 8-1(previous position)

for run this maze solver you first of all you need to download it and after that u need to addresing to a file
that you save your maze by
this format:
| Wall = 1 | Dir = 0 |
| -------- | ------- |



### the format of your text file :

```shell
3  
0 0 0  
0 0 0  
0 0 0
```  
```shell
4  
0 0 1 0  
0 1 0 0  
0 0 0 0  
1 1 0 0 
```
  

after that you run it  
the result is `best dir` + and the sum of `founded dirs` and runtime   



Note: you just need to change the dirctory of the text file that i addres it in my maze solver.py   
change it in to your own text file and enjoy it  

---

## 2- The Trie Dictionary
* [Github repo](https://github.com/CenaAshoori/Dictionary)

Dictionary written with dic of python (k trie) 

This is an Dictionary written with dic(map) of python that you can insert your **_word_**  and **_Translation_** of that
you can import word's and that's translation from file and from command

and also you can see translation of word by searching word
and a feature is that you can search all of the word that start with a same char 
(actuly showall() method find all of the word (by dfs) and show to you)

in below example i ignore then translations  

ex: input    >>  
`aaa-aba-abb-acc`

`bbc-bbb` 

  
__ __
if your search is ab*    
the result is :  
`aba-abb`   
__ __  
if your search is a*    
the result is :  
`aaa-aba-abb-acc`  
__ __  
the format of input.txt file is like example below

**word**: **meaning**   


