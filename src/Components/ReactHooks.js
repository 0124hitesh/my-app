import React,{useState, useEffect} from 'react';

export default function ReactHooks(){
    // const [name]= useState("hitesh");
    const [name, setState_xyz] = useState("hitesh");
    const [mob] = useState(54545454);

    useEffect(()=>{
        console.log("useEffect");
    });
    return (
        <>
        <h1>{name}</h1>
        <h2>{mob}</h2>
        <button onClick={()=>{
            setState_xyz("Hitesh Sharma");
        }}>Click</button>
        </>
    );
}