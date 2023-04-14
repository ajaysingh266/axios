import { Button } from 'antd'
import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Home = () => {
    
    // const navigate = useNavigate();
    // const navToPage = () => {
    //     let x = false;
    //     // condition depends which we want. it can be props, state etc
    //     if(x){
    //         navigate("/about");
    //     } else{
    //         navigate("/fiter")
    //     }
    // }
    // other way

    // const navToPage = (url) => {
        
    //         navigate(url);
        
    // }
    return (
        <div className=''>

            <h1>this is home page</h1>
            <p>lorem ipsem </p>
            <p>learning about router</p>
            <Link to={"/about"}> Go to about page</Link><br /><br />
            {/* <Button onClick={()=>navigate("./about")}>Go to about page</Button><br/><br/>
      <Button onClick={()=> navigate("./filter")}>Go to Filter page</Button> */}

            {/* for conditional routing make a function */}
            {/* <Button onClick={() => navToPage("/about")}>Go to about page</Button><br /><br />
            <Button onClick={() => navToPage("/filter")}>Go to Filter page</Button> */}

        </div>
    )
}

export default Home
