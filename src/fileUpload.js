import React, {Component, useRef, useState} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import imageToBase64 from 'image-to-base64';
// import i from './z.jpg';

function FileUpload(){

    const id = useRef();
    const pass = useRef();
    const [img, setImg] = useState();
    const [s, setSrc] = useState();
    const [base64, setBase] = useState('');

    const fun =async (e)=>{
        e.preventDefault();

        console.log(id.current.value)
        console.log(pass.current.value)
        
        axios.post('/upload/userinfo', {
            name : id.current.value,
            password : pass.current.value,

        }).then((response) => {        });

        var fdata = new FormData();
        fdata.append('user_img', img)
        axios.post('/upload/img', fdata, {
            
        }).then((res)=>{      })
        

    }

    const imgChange =async (e)=>{
        
        setSrc(URL.createObjectURL(e.target.files[0]));
        alert('Image')
        console.log(s)
        const im = e.target.files[0];
        setImg(im);

    }

    const getImg =async ()=>{
        await axios.get('/up', {
            responseType: 'arraybuffer'
          }).then(res => {
            
            // arrayBuffer contains base64 of image
            var arrayBufferView = Buffer.from(res.data, 'binary').toString('base64')
            // setBase(arrayBufferView)
            setSrc("data:image/png;base64," + arrayBufferView)

            // var blob = new Blob( [ arrayBufferView ], { type: "image/png, image/gif, image/jpeg, image/jpg" } );
            // imageUrl = URL.createObjectURL( blob );
            
        })
    }

    return(
        <>
            {/* <form class=" container"  method="POST" enctype="multipart/form-data" onSubmit={fun()}></form> */}
            <form className=" container " onSubmit={fun}>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="text" className="form-control" ref={id}  placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="text" className="form-control" ref={pass} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg" className="form-control" onChange={imgChange} />
                </div>
                <br></br>
                <br></br>
                <img src={s} alt="imag" style={{width:"100px", height:"100px"}} />
                
                <br></br>
                <br></br>

                {/* <input type="file" name="file" accept="image/png, image/gif, image/jpeg, image/jpg"></input> */}
                <button type="submit" className="btn btn-primary m-3">Submit</button>
                <button type="button" className="btn btn-primary" onClick={getImg} >Get-Image</button>
                </form>
        </>
    )
}

export default FileUpload;