import axios from "axios";
import {  useEffect, useState} from "react";
import Navbar from "./Navbar";
import MedListItem from "./Med/Med_listItem";
import { useSelector,} from "react-redux";
import checkAuth from "./auth/checkAuth";
import Footer from "./footer";
// import { Link } from "react-router-dom";
// import React, {useContext} from 'react';
// import {MyContext} from "./Navbar"


function SearchMed() {
    var [medicine, setMedicine]=useState([]);
    var user = useSelector(store=>store.auth.user);
    var [quarry,setQuarry] = useState("");
    // console.log(quarry);

    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/',{
            headers:{'Authorization':"Bearer "+ user.token}
        }).then(response=>{
            setMedicine(response.data)
        })   

    },[user]);
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row bg-danger" style={{textAlign:"center"}}>
                
                <div className="col-12">
                    {/* <h3 className="text-center my-4">You searched for {quarry}</h3> */}
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2 mt-5"> 
                    <form className="" style={{marginLeft:"130px"}}>
                            <input 
                            className="form-control me-2 br-info" type="search" 
                            placeholder="Search the medicine here" 
                            onChange={(e)=> setQuarry(e.target.value)}
                            style={{width:"450px", borderRadius:"50px", textAlign:"center", border:"1px solid cyan",height:"50px"}}>    
                            </input>
                            {/* <Link to="/search_med" className="btn btn-outline-info"  type="submit"style={{marginLeft:"10px",borderRadius:"50px"}}>Search</Link> */}
                    </form>
                    <div className="mt-5"> 
                        {/* {medicine.filter(med=>med.expiry_date.includes(date)).map(med =><MedListItem key={med.id} med={med} />)} */}
                        
                        {medicine.filter(med=>med.name.toLowerCase().includes(quarry)||
                                              med.name.toUpperCase().includes(quarry)).map(med =><MedListItem key={med.id} med={med} />)}
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}

export default checkAuth(SearchMed);








/* {medicine.filter((med)=>{
                            return quarry.toLowerCase()=== '' ? med : med.name[0].toLowerCase().includes(quarry) ||
                                   quarry.toUpperCase()=== '' ? med : med.name[0].toUpperCase().includes(quarry)
                        }).map(med =><MedListItem key={med.id} med={med} />)} */