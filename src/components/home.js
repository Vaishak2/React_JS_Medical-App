import React from 'react'
import { Link } from 'react-router-dom';
import checkAuth from './auth/checkAuth';
import { useSelector } from "react-redux";

function Home() {
  var user = useSelector(store=>store.auth.user);
  // const live_date = new Date()
  // var dateString = live_date.toDateString()
  // console.log(live_date)
  return ( <div >
    <div className='container 'style={{width:"600px", marginTop:"95px",marginLeft:"370px", borderLeft:"3px solid cyan",paddingTop:"28px",paddingBottom:"30px", paddingLeft:"20px"}} >
      <h1>MED<span className='text-info'>i</span>STORE</h1>
      {user ?
        <h4>Welcome {user.name}..!</h4>:<p></p>}
      <h4>A website for Medical consulting & ordering.!</h4>
      <h4>High quality medicines at lowest rates.!</h4>
      <Link to="/med_list" type="button" className='btn btn-info mt-2 display-inline' style={{width: "120px"}}>Shop Now</Link>
      
    </div>
    {/* <div className='col-3 float-right' style={{marginTop:"140px"}}> */}
        {/* <p>time</p> */}
        {/* <span className='col-4 float-right' style={{marginTop:"70px"}}>{dateString}</span>s */}
    {/* </div> */}
  </div> )
}
// export default home
export default checkAuth(Home);