import React, {useEffect} from 'react';
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications";
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const name = localStorage.getItem("name");
        if(!token && !role && !name){
            NotificationManager.error("Already Logged out ","",3000);
            navigate("/home")
        }
        else {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("name");
            NotificationManager.warning("Logged out successfully","",3000);
            navigate("/home")
        }
    }, [navigate])
    return(
        <div>Logout</div>
    );
}

export default Logout;