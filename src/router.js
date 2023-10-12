import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/aboutus";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import App from "./App";
import Medlist from "./components/Med/Med_list";
import CreateMed from "./components/Med/CreateMed";
import ViewMed from "./components/Med/ViewMed";
import EditMed from "./components/Med/EditMed";
import SearchMed from "./components/search_med";
// import checkAuth from "./components/auth/checkAuth";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path: 'med_list', element:<Medlist/>},
    { path: 'med_list/create', element:<CreateMed/>},
    { path: 'med_list/:medId', element:<ViewMed/>},
    { path: 'med_list/:medId/edit', element:<EditMed/>},
    { path: 'search_med', element:<SearchMed/>},
    { path: 'aboutus', element: <Aboutus/> },
    
]);

export default router;