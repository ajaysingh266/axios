import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>this is about page</h1>
      <p>lorem ipsem </p>
      <p>learning about router</p>
      <Link to={"/"}> Go to home page</Link>
      <li><Link to={"/user/ajay"} state={{name:"ch"}}>Ajay</Link></li>
      <li>
        <Link to={"/user/singh"}>Sing</Link>
        </li>
    </div>
  )
}

export default About
