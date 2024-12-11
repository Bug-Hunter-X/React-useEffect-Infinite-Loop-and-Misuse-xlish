```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function to be called when the component unmounts or when the effect runs again
    return () => {
      console.log('Component unmounted or effect ran again');
    };
  }, []); // Empty dependency array runs only once on mount

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]); // Correct dependency array: effect runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```