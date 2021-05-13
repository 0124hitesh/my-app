import React,{useState,useEffect} from 'react';

export default function Event(){

    const [name, setNamee]= useState({fname:"hitesh", lname:"sharma"});

    // const upd=()=>{}
    function fna(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        // setNamee({fname:e.target.value})
       setNamee({...name,fname:e.target.value});

    }

    function lna(e){
    //    setNamee({lname:e.target.value});
        setNamee({...name,lname:e.target.value});
    }

    return(
        <>
        <input type="text"  value={name.fname} onChange={fna}></input>
        <input type="text"  value={name.lname} onChange={lna}></input>
        <h2>fName: {name.fname}</h2>
        <h2>lName: {name.lname}</h2>
        </>
    )
}