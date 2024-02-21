# Fibonacci Golden Spiral

This code generates a visualization of Fibonacci's golden spiral using p5.js, a JavaScript library for creative coding. The golden spiral is created by drawing rectangles whose dimensions are based on Fibonacci numbers. Additionally, it includes functions to compute Fibonacci numbers both recursively and iteratively.

## Installation

1. Clone this repository to your local machine or download the `index.html` and `sketch.js` files.
2. Open `index.html` in a web browser.

## Usage

The main functionality of this code is to display Fibonacci's golden spiral. To use it:

1. Open the `index.html` file in a web browser.
2. The canvas will display the golden spiral.

## Code Explanation

### Drawing the Golden Spiral

- The `setup()` function initializes the canvas with a size of 500x500 pixels.
- In the `draw()` function:
  - The canvas background is set to white (`background(255)`).
  - Rectangles are drawn using the `rect()` function. The size of each rectangle increases based on Fibonacci numbers, creating the golden spiral effect.

### Computing Fibonacci Numbers

- Two functions are provided for computing Fibonacci numbers: `fibRekursion()` and `fibIteration()`.
- `fibRekursion(n)`: Computes the nth Fibonacci number recursively.
- `fibIteration()`: Computes Fibonacci numbers iteratively.
- The execution time for both methods is measured using `console.time()`.

## Example

Below is an example of how to compute Fibonacci numbers using the provided functions:

```javascript
console.time("rekursion");
fibRekursion(20); // Compute the 20th Fibonacci number recursively
console.timeEnd("rekursion");

console.time("iteration");
fibIteration(20); // Compute the 20th Fibonacci number iteratively
console.timeEnd("iteration");
```