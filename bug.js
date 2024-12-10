```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Effect running:', count);
    //The problem is that this effect runs even when the count value is the same
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]); //The problem is in the dependency array here

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```