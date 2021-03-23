import React,{Component,useState,useEffect} from 'react';
import './Prac_9.css'

export default function Table(){

    const [name, setName]=useState("");
    const [pass, setPass]=useState("");
    const [mail, setMail]=useState("");
    const [count, setCount]=useState(1);
    var [rows, setRow]=useState();

    function f_name(e){
        setName(e.target.value);
    }
    
    function f_pass(e){
        setPass(e.target.value);
    }

    function f_mail(e){
        setMail(e.target.value);
    }

    function addUser(e){
        setRow(
        <React.Fragment> 
            {rows}
            <tr>
                <th>{count}.</th>
                <th>{name}</th>
                <th>{pass}</th>
                <th>{mail}</th>
            </tr>
        </React.Fragment>
        )

        setCount(count + 1);
        setName();
        setPass();
        setMail();
    }
    
    return(
        <>
        <h1>React Dynamic Table</h1>
        <section id="insert">
            <form>
            UserName <input type="text" onChange={f_name} value={name}></input>
            Password <input type="password" onChange={f_pass} value={pass}></input>
            Email Id: <input type="mail" onChange={f_mail} value={mail}></input>
            <button type="button" onClick={addUser}>ADD USER</button>
            </form>
        </section>

        <section id="tab">
        <table>
            <thead>
                <tr>
                    <th>SNo</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email ID</th>
                </tr>
            </thead>

            <tbody>
               {rows}
            </tbody>
        </table>
        </section>
        </>
    )
}