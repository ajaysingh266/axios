import React from 'react'


const Option = (props) => {
    const [checked,setChecked] = React.useState(props.defaultChecked)

    let flag = props.checked!=null || props.checked!=undefined?props.checked:checked;
  
    const onChange=(e)=>{
      if(props.onChange)
        props.onChange(e)
    }


console.log('name', props.children);

    return (
        <>
        
            <option
              
             value={props.value} 
             checked={flag}
             onChange={onChange}
             name= {props.name}
             disabled= {props.disabled}
            >
                {props.children}
            </option>

        </>
    )
}

export default Option
