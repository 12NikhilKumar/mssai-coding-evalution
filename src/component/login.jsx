import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginRequest } from "../redux/action";
import Home from "./home";

const Login = ()=>{
    const dispath = useDispatch();
    const isAuth = useSelector((state)=>state.isAuth)
    const handleLogin = ()=>{
        const action = loginRequest();
        dispath(action)
    }
    return isAuth?(
        <Home/>
    ):
    ( 
        <>
            <h1>welcome to login please login</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login