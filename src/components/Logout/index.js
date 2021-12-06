import React from 'react'
import {useNavigate} from "react-router"
const Logout = () => {
    const navigate=useNavigate();
    function logout(){
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Logout
