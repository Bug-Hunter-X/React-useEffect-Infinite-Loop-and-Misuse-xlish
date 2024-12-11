# React useEffect Infinite Loop and Misuse

This repository demonstrates a common error when using the `useEffect` hook in React: creating an infinite loop due to incorrect dependency management and a missing cleanup function.  The example also shows a misunderstanding of the execution of useEffect when the dependency array is empty ([]).

## Bug

The `bug.js` file contains a React component that attempts to increment a counter using `useEffect`. However, the dependency array is incorrect, causing the effect to run infinitely, leading to performance issues and potential crashes.

## Solution

The `bugSolution.js` file provides the corrected component.  The issue is solved by correctly specifying the `count` in the dependency array for the second useEffect call, and by implementing a cleanup function within the useEffect to prevent any unwanted side effects.