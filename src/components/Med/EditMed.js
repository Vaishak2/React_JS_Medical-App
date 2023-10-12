import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import checkAuth from "../auth/checkAuth";
import Swal from "sweetalert2";



function EditMed() {
    const {medId} = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    var user = useSelector(store=>store.auth.user);
    var navigate = useNavigate();
    
    useEffect(()=>{
        if(user){
            axios.get('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
                    headers:{'Authorization':"Bearer "+ user.token}}).then(response=>{
                setName(response.data.name);
                setCompany(response.data.company);
                setExpiry_date(response.data.expiry_date);
            })
        }else{navigate('/login');}
    },[medId,user,navigate]);
    function updateMed(){
        // if(user){
            axios.post('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
            name: name,
            company: company,
            expiry_date: expiry_date,},{
                headers:{'Authorization':"Bearer "+ user.token}}
            ).then(response=>{
            Swal.fire(
              response.data.message,
              '',
              'success'
            )
            navigate('/med_list')
            })
        // }else{navigate('/login');}
    }
    
    return <div>
        <Navbar/>
        <div className="container" style={{marginTop:"15px"}}>
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Medicine</h1>
                    <div className="container_edit">
                        <div className="form-group">
                            <label>Name:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            style={{width:"450px"}}
                            value={name} 
                            onChange={(event)=>{setName(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company:</label>
                            <textarea 
                            className="form-control" 
                            style={{width:"450px"}}
                            value={company} 
                            onChange={(event)=>{setCompany(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date:</label>
                            <input 
                            type="date"
                            className="form-control"
                            style={{width:"450px"}} 
                            value={expiry_date} 
                            onChange={(event)=>{setExpiry_date(event.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info float-left" onClick={updateMed}>Submit</button>
                            <Link to="/med_list" className="btn btn-danger float-left" style={{marginLeft:"10px"}}>Discard</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    
}

export default checkAuth(EditMed);