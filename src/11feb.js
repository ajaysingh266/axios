import React from 'react'

const Second = (props) => {
    console.log(props);
  return (
    <ul>
     {
        props.data.map((item)=>{
        return(
            <>
            <li>
                {item.name}
            </li>
            <li>
                {item.phone}
            </li>
            </>
        )
        })
     }
     
    </ul>
  )
}

export default Second

