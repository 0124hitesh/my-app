import React,{Component,useState} from 'react';
import axios from 'axios';

export default function Temp(){
    var [name,setName]=useState("");
    var [pass,setPass]=useState("");
    const [res,setRes]=useState('');

    function sname(e){
        setName(e.target.value);
    }

    function spass(e){
        setPass(e.target.value);
    }

    function Clickk(){
        // alert(name);
        // console.log(name);
        const d={pass,name};
        console.log(d.name);
        console.log(d.pass);
        axios.post('/express',d).then(response=>{
            setRes(response.data.re);
        });
    }

    return(
        <>
        Name
        <input onChange={sname}></input><br></br><br></br>
        Password
        <input onChange={spass}></input><br></br><br></br>
        <button type='button' onClick={Clickk}>Click</button>
        <br></br><br></br>
        <h1>{res}</h1>
        </>
    )
}