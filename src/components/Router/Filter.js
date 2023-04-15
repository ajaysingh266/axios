import { NavLink, useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams, setSearchParams] = useSearchParams();
    // this searchparam is mostly used to in query to find the url data
    // setSearchparam is used to get data from page and set in url
    console.log(searchParams.get("age"));
    console.log(searchParams.get("city"));
    // for example we set age and city in url to get data from url.
    const age = searchParams.get("age");
    const city = searchParams.get("city");
    return(
        <>
        <h2>This is filter page</h2>
        <h3>Age is: {age}</h3>
        <h3>City is: {city}</h3>
        <input type={"text"} onChange={(e)=>setSearchParams({text:e.target.value, age:10})}  placeholder="Set Text in query Param"/>
        <button onClick={()=>setSearchParams({age:40})}>Set Age in query</button> <br/>
        <NavLink to={"/"}>Go to Home Page</NavLink>
        </>
    )
}

export default Filter;
