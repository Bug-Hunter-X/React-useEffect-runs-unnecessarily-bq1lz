# React UseEffect Runs Unnecessarily

This repository demonstrates a common mistake when using the `useEffect` hook in React.  The effect runs even when the `count` value doesn't change, leading to unnecessary re-renders and potential performance issues.

## Problem

The provided `MyComponent` uses `useEffect` to log the current `count`. However, the effect runs on every render, even if the `count` remains unchanged.  This is due to an incorrect or missing dependency array.

## Solution

The solution involves correctly specifying the dependencies for `useEffect`. By including `count` in the dependency array, we ensure the effect only runs when the `count` value changes.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Additional Notes

This example highlights the importance of carefully considering the dependencies within the `useEffect` hook's second argument.  Omitting dependencies can lead to unexpected behavior and performance bottlenecks.