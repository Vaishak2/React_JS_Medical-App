import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector,} from "react-redux";
import checkAuth from "../auth/checkAuth";
import Swal from "sweetalert2";

function CreateMed() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    var navigate = useNavigate()
    var user = useSelector(store=>store.auth.user);
    function addMed() {
        var medicine_details = {
            name: name,
            company: company,
            expiry_date:expiry_date
        }
        axios.post('https://medicalstore.mashupstack.com/api/medicine',medicine_details,{
            headers:{'Authorization':"Bearer "+ user.token},
            
        }).then(response=>{
            // Swal.fire(response.data.message);
            Swal.fire(
                response.data.message,
                '',
                'success'
              )
            navigate('/med_list')
        })
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container_auth" style={{width:"800px"}}>
            <div className="form_div" style={{paddingRight:"100px",paddingLeft:"8px",width:"500px", height:"440px",marginTop:"30px", marginLeft:"420px"}}>
                <div className="row">
                    <div className="col-8 offset-2">
                        <h2 style={{marginBottom:"10px"}}>Create Post :</h2>
                        
                        <div className="form-group">
                            <label>Med Name:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            style={{width:"300px"}}
                            value={name} 
                            onChange={(event)=>{setName(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company Name:</label>
                            <input 
                            className="form-control" 
                            style={{width:"300px"}}
                            value={company} 
                            onChange={(event)=>{setCompany(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date:</label>
                            <input
                            type="date" 
                            className="form-control" 
                            style={{width:"300px"}}
                            value={expiry_date} 
                            onChange={(event)=>{setExpiry_date(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info float-right" onClick={addMed}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(CreateMed);