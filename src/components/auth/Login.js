import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import Navbar from "../Navbar";
import checkGuest from "./checkGuest";
import React from 'react';


function Login() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    
    const dispatch = useDispatch();
    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login',{
            name : name,
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                name : name,
                email:email,
                token:response.data.token
            }
            // console.log(response.data.token)
            dispatch(setUser(user));
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (<div>
        <Navbar/>
        <div className="container_auth"style={{ marginLeft:"450px", marginTop:"50px"}}>
            <div className="form_div">
                <div className="row">
                    <div className="col-8 offset-2 form_input"style={{ marginLeft:"10px"}}>
                        <h2 style={{fontWeight:"bold"}}>LOGIN</h2>
                        
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                            className="form-control"
                            value={name}
                            onInput={(event)=>setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text"
                            className="form-control"
                            value={email}
                            onInput={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                            className="form-control"
                            value={password}
                            onInput={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info" style={{width:"100px"}} onClick={attemptLogin}>Login</button>
                        </div>
                        {errorMessage?<div className="text-danger "style={{fontSize:"small", width:"300px"}}>* {errorMessage}</div>:''}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkGuest(Login);