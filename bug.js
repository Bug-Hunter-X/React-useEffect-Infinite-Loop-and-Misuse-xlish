```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This effect runs only once on mount and never updates
    console.log('Component mounted');
  }, []);

  useEffect(() => {
    // Incorrect logic: This effect runs on every render causing an infinite loop
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```