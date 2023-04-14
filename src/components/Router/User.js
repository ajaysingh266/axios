import { useParams, useLocation } from "react-router-dom"

function User(){
    const params = useParams();
    const {name } = params;
    console.log(name);
    const location = useLocation();
    console.log(location);
    return(
        <>
        <h2>This is {name} page</h2>
        </>
    )
}
export default User