import {Route} from "react-router-dom"
import Home from "../component/home"
import Login from "../component/login"
import Search from "../component/search"
const  AllRoutes = ()=>{
    return(
        <>
            <Route exact path="/login">
                <Login/>
            </Route>
        </>
    )
}
export default AllRoutes