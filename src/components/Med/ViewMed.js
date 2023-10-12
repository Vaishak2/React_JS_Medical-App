import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Navbar from "../Navbar";
import { useSelector,} from "react-redux";
import checkAuth from "../auth/checkAuth";
import Swal from "sweetalert2";
import Footer from "../footer"
import { useNavigate } from "react-router-dom"


function ViewMed() {
    var {medId} = useParams()
    var [med,setMed] = useState({name:'',company:'',expiry_date:''})
    var user = useSelector(store=>store.auth.user);
    var navigate = useNavigate();
    useEffect(()=>{
        if(user){
            axios.get('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
                headers:{'Authorization':"Bearer "+ user.token}
            }).then(response=>{
                setMed(response.data)
            }).catch(error=>{console.log(error)
            })
        }else{navigate('/login');}
    },[medId,user,navigate]);
    // console.log(medId)
    function deleteMed() {
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+med.id,{
            headers:{'Authorization':"Bearer "+ user.token},
        }).then(response=>{
            Swal.fire({
                icon: 'error',
                title: response.data.message,
              })
        })
        
    }
    
    
    return <div>
        <Navbar/>
        {user ?
            <div className="container" style={{marginTop:"95px", width:"550px",}}>
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{boxShadow:"0px 5px 8px rgb(79, 79, 79)"}}>
                            <div className="card-header"><h3>Med Title : {med.name}</h3></div>
                            <div className="card-body"><strong>Med Detail :</strong> <br></br>Company : {med.company}<br></br>Expiry date : {med.expiry_date}</div>
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Link to="/med_list" className="btn btn-info"style={{marginTop:"25px",marginRight:"15px", width:"100px", }}>Med List</Link>
                            <Link to={"/med_list/"+med.id+"/edit"} className="btn btn-primary"style={{marginTop:"25px",marginRight:"15px", width:"100px", }}>Edit</Link>
                            <Link to="/med_list" onClick={deleteMed} className="btn btn-danger"style={{marginTop:"25px", width:"100px", }}>Delete</Link>
                        </div>
                    </div>
                </div>
            </div>:
            <div></div>
        }
        <Footer></Footer>
    </div>
}

export default checkAuth(ViewMed);