import {useState} from 'react';

function CounterWithHooks () {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }
    
    function decrement() {
        setCount(count - 1);
    }
    
    return (
        <div>
        <h1>Contador com Hooks</h1>
        <p>Contador: {count}</p>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        </div>
    );
}

export default CounterWithHooks;