import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MedListItem from "./Med_listItem";
import { useSelector,} from "react-redux";
import { useEffect} from "react";
import checkAuth from "../auth/checkAuth";
import { useNavigate } from "react-router-dom"
import Footer from "../footer"

function Med_list() {
    var [medicine, setMedicine]=useState([]);
    var user = useSelector(store=>store.auth.user);
    var navigate = useNavigate();
    function fetchMedicine(){
        if(user){ 
            axios.get('https://medicalstore.mashupstack.com/api/medicine',{
                headers:{'Authorization':"Bearer "+ user.token}
            }).then(response=>{
                setMedicine(response.data)
            })
            
        }else{
            navigate('/login');
        }

    }
    // fetchMedicine()
    useEffect(()=>{
        fetchMedicine()    
    })

    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center my-4"> Available Medicines</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/med_list/create" className="btn btn-success mb-2" style={{width:"150px", borderRadius:"50px"}}>Create Med</Link>
                    {medicine.map(med =><MedListItem key={med.id} med={med} refresh={fetchMedicine}/>)}
                    {/* {medicine.map(med=>{
                        return <h4>{med.name} </h4>
                    })} */}
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>)
}

export default  checkAuth(Med_list);