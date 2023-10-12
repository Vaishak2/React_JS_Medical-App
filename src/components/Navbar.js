import axios from "axios";
import React from "react";
import { useDispatch, useSelector,} from "react-redux";
import { NavLink, useNavigate, } from "react-router-dom";
import { removeUser } from "../store/authSlice";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import  SearchMed  from "./search_med";
// const MyContext = React.createContext();

function Navbar() {
    var user = useSelector(store=>store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout(){
        if(user){
            axios.post('https://medicalstore.mashupstack.com/api/logout',{},{
               headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeUser());
            navigate('/login');
        }
    }
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{paddingBottom:"15px", paddingTop:"15px", borderBottom:"0.5px solid cyan",boxShadow:"0px 5px 8px rgb(179, 249, 253)"}}>
        <div className="navbar-brand">
            <h2 style={{fontWeight:"bold"}}>MED<span className="text-info">i</span>STORE</h2>
        </div>
        
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
            className="collapse navbar-collapse mr-auto"
            id="navbarNav"
            style={{ float: "left" }}
            >
                <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                {user?
                    <li className="nav-item text-info">
                    <NavLink 
                    to={"/"} 
                    className={
                        'nav-link  '+
                        (status => status.isActive ? 'active ' : '')
                    } 
                    >
                        Home
                    </NavLink>
                    </li>:
                    <li></li>
                }

                    {user?
                        <li className="nav-item">
                        <NavLink 
                        to={"/med_list"} 
                        className={
                            'nav-link '+
                            (status => status.isActive ? 'active' : '')
                            
                        } 
                        >
                            Medications
                        </NavLink>
                        </li>:
                        <li></li>
                    }
                    {user?    
                        <li className="nav-item">
                        <NavLink 
                        to={"/search_med"} 
                        className={
                            'nav-link '+
                            (status => status.isActive ? 'active' : '')
                        } 
                        >
                            Search
                        </NavLink>
                        </li>:
                        <li></li>
                    }
                    
                    {/* {user?
                        <li className="nav-item">
                        <NavLink 
                        to={"/aboutus"} 
                        className={
                            'nav-link '+
                            (status => status.isActive ? 'active' : '')
                        } 
                        >
                            About us
                        </NavLink>
                        </li>:
                    
                        <li className="nav-item">
                        
                        </li>
                    } */}
                    <li className="nav-item">
                        <NavLink 
                        to={"/register"} 
                        className={
                            'nav-link '+
                            (status => status.isActive ? 'active' : '')
                        } 
                        >
                            Register
                        </NavLink>
                    </li>
                    {user?
                        <li className="nav-item">
                            <span className="btn btn-outline-info ml-3" onClick={logout} style={{cursor:"pointer",borderRadius:"50px"}} >Logout</span>
                        </li>:
                        <li className="nav-item">
                        <NavLink 
                        to={"/login"} 
                        className={
                            'nav-link '+
                            (status => status.isActive ? 'active' : '')
                        } 
                        style={{cursor:"pointer"}}
                        >
                            Login
                        </NavLink>
                        </li>                   
                    }
                    {/* {user?
                        <li>
                            <form className="d-flex" style={{marginLeft:"30px"}}>
                                <input 
                                className="form-control me-2 br-info" type="search" 
                                placeholder="Search medicine" 
                                onChange={(e)=> setQuarry(e.target.value)}
                                style={{borderRadius:"50px", border:"1px solid cyan",background:"#dfdbdb"}}>    
                                </input>

                                <Link to="/search_med" className="btn btn-outline-info"  type="submit"style={{marginLeft:"10px",borderRadius:"50px"}}>Search</Link>
                            </form>
                        </li>:
                        <li></li>
                    } */}
                </ul>
            </div>
        
        
    </nav>;
}

export default Navbar
// export  {MyContext};
