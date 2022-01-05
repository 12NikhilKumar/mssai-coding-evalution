import {Link} from 'react-router-dom';
const NavBar = ()=>{
    return(
        <div style={{display: 'flex',width: '100%',height:'40px',padding: '1rem',backgroundColor:'red',gap:'100px',justifyContent: 'center'}}>
            <Link to="/login">Login</Link>
        </div>
    )
}
export default NavBar