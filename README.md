# Mixed Messages

A simple JavaScript program built as part of the Codecademy Full-Stack Path.  
Each time the program runs, it generates a new, randomized message made from multiple pieces of data.

---

## 🚀 Project Overview
This project outputs:
- A personal greeting
- The user's question
- A randomly selected bot response

Every execution produces a unique combinatSion.gi

---

## 🧠 How It Works

The program:
1. Validates user input  
2. Stores several possible bot replies in an array  
3. Randomly selects one using `Math.random()`  
4. Returns a structured object containing all message components  

Example output:

```js
{
  user: "Hello, Bruno!",
  question: "You asked: What is your name?",
  botReply: "Plot twist: you were the bug all along."
}
