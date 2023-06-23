// import { useEffect, useState } from "react";
// import Counter from "./components/Counter";

// function Home() {

//     const [state, setState] = useState(false);

//     // useEffect(() => {
//     //     if (state)
//     //         return <Counter />
//     // })

//     return (
//         <div className="App">
//             <button onClick={() => setState(!state)}>Show/Hide</button>
//             {state && console.log({ state })}
//         </div>
//     )
// }

// export default Home

import React, { useState } from 'react';

function Home() {
    const [state, setState] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setState(!state)}>Show/Hide</button>
            {state && <YourComponent />}
        </div>
    );
}

function YourComponent() {
    return <div>This is your component.</div>;
}

export default Home;