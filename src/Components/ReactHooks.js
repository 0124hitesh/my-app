import React, { useState, useEffect } from 'react';

export default function ReactHooks() {
    // const [name]= useState("hitesh");
    const [name, setState_xyz] = useState("hitesh");
    const [mob] = useState(54545454);

    var [a, setA] = useState(0);
    var [b, setB] = useState(1);

    function fun() {
        setA(5);
    }

    function fun2() {
        setB(2);
    }

    useEffect(() => {
        console.log("useEffect");
    }, [a, b]);
    // useEffect will recall after a or b value update
    
    return (
        <>
            <h1>{name}</h1>
            <h2>{mob}</h2>
            <button onClick={() => {
                setState_xyz("Hitesh Sharma");
            }}>Click</button>
            <br></br>
            <button onClick={fun} >Hellllooooo</button>
            <button onClick={fun2} >Hellllooo2</button>
        </>
    );
}