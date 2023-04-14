import './App.css';
import React from "react";

import Second from './11feb';
import MyfirstApp from './11-02';


const App = () => {
    //   const  data=["apple", "banana", "mango"]
    const person = [
        {
            name:"abc",
            phone:12345
        },
        {
            name:"xyz",
            phone:12345
        },
    ]
    return (

        <>
            hello

            <p><Second data={person} /></p>

            <MyfirstApp item="first component" />

        </>
    );

}

export default App;

