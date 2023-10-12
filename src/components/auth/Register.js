import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

function Register() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('https://medicalstore.mashupstack.com/api/register',user).then(response=>{
            setErrorMessage('');
            Swal.fire(
                'Registration Compleate',
                'Click the button to continue!',
                ''
              )
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
    return <div>
        <Navbar/>
        <div className="container_auth col-12" style={{width:"800px", }}>
            <div className="form_div" style={{paddingRight:"100px",paddingLeft:"8px",width:"500px", height:"500px",marginTop:"30px", marginLeft:"420px"}}>
                <div className="row">
                    <div className="col-8 offset-2 ">
                        <h2 style={{fontWeight:"bold"}}>REGISTER</h2>
                        
                        <div className="form-group">
                            <label>Name:</label>
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
                            <label>Confirm Password:</label>
                            <input type="password"
                            className="form-control"
                            value={passwordConf}
                            onInput={(event)=>setPasswordConf(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info "style={{width:"100px"}} onClick={registerUser}>Submit</button>
                        </div>
                        {errorMessage?<div className=" text-danger " style={{fontSize:"small", width:"300px"}}>* {errorMessage}</div>:''}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Register;