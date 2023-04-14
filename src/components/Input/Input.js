
import React from 'react'

const Input = (props) => {
  return (

    <>
      <div className='mt-10 ml-10 border-2 border-gray-400 w-48 p-2'>
        <input
          type={props.type}
          value={props.value}
          onChange={event => console.log("value changed!")}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          

        />

      </div>


    </>
  )
}

export default Input
