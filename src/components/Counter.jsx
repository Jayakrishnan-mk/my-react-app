import React, { useEffect, useState } from 'react'

function Counter() {
    useEffect(() => {
        console.log('Mounting........');
    })
    // console.log('Mounting........');
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Opened: {count}</h1>
        </div>
    )
}

export default Counter
