import React from 'react'
import { Link, Outlet , useNavigate} from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const navigatePage=()=>{
        navigate("home");
    }
    console.log("type",typeof typeof 1);
    return (
        <>
            <h2>This is contact us page</h2>
            <h3>here we have some contact</h3>
            <button onClick={navigatePage}>Hello</button>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Outlet />
        </>
    )
}

export default Contact;
