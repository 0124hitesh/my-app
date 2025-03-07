import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap';

// to use react-bootstrap we need to import all components instead of giving classname

{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link> */}

function Display1(){

    const arr=[1,2,3,4,5,6];
    // const new_arr=arr.map(function(num){
    //     return <li>{num*2}</li>
    // });
    return(
        <>
        <h1>1.</h1>
        <ul>{
            arr.map((num)=>{
                return <li>{num}</li>
            })
        }
        </ul>

        <h1>2.</h1>
        <ul>
            {arr.map(num => <li>{num}</li>)}
        </ul>

        </>
    );
}

function Display2(){
    const arr=[{
        "name": "priya",
        "lastName": "gupta",
        "age": 17,
        "averageScore": 8.4,
        "id": 1,
        "sec": "A",
        "gender": "female"
      },
      {
        "name": "shyam",
        "lastName": "rana",
        "age": 17,
        "averageScore": 5.4,
        "id": 2,
        "sec": "B",
        "gender": "male"
      },
      {
        "name": "kamal",
        "lastName": "sharma",
        "age": 11,
        "averageScore": 6.4,
        "id": 3,
        "sec": "A",
        "gender": "male"
      },
      {
        "name": "sachin",
        "lastName": "yadav",
        "age": 19,
        "averageScore": 2.4,
        "id": 4,
        "sec": "B",
        "gender": "male"
      }];

      const showData = (num, index)=>{
          return (
              <tr key={index}>
                  <td>{index+1}</td>
                  <td>{num.name}</td>
                  <td>{num.lastName}</td>
                  <td>{num.age}</td>
              </tr>
          );
      }

      return(
        <>
        {/* {arr.map((num)=>{<li>{num}</li>})} */}

        {/* <table>
                {arr.map(showData)}
        </table> */}
        
        <table className="table container">
        <thead class="bg-primary">
            <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
           {arr.map(showData)}
        </tbody>
        </table>

        <Button variant="primary">React Bootstarp</Button>{' '}
        <button type="button" class="btn btn-primary">Bootstarp</button>
    </>
    );

}

export {Display1,Display2}