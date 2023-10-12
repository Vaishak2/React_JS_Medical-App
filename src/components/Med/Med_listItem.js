import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector,} from "react-redux";
import checkAuth from "../auth/checkAuth";
import Swal from "sweetalert2";


function MedListItem(props) {
    var user = useSelector(store=>store.auth.user);
    // var date = new Date()
    function deleteMed() {
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.med.id,{
            headers:{'Authorization':"Bearer "+ user.token},
        }).then(response=>{
            Swal.fire({
                icon: 'error',
                title: response.data.message,
              })
            props.refresh()
        })
        
    }
    return <div className="card"style={{height:"75px"}}>
        <div className="card-body" style={{fontWeight:"bold"}} >
            <span className={new Date(props.med.expiry_date)<=new Date() ? 'text-danger':''}>
            
            {props.med.name}</span>
            
                <button className="btn btn-danger float-right" onClick={deleteMed} style={{marginLeft:"8px"}}>
                    Delete</button>
                <Link to={"/med_list/"+props.med.id+"/edit"} className="btn btn-primary float-right"style={{marginLeft:"8px"}}>
                    Edit</Link>
                <Link to={"/med_list/"+props.med.id} className="btn btn-info float-right"style={{marginLeft:"8px"}}>
                    View</Link>
            
        </div>

</div>
}
export default checkAuth(MedListItem);