import { useState } from "react";


 const Checkbox = (props) => {
   
    const [checked, setChecked] = useState(props.defaultChecked)

    let flag = props.checked != null || props.checked != undefined ? props.checked : checked;

    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)        
    }

    return (
        <div className="">
            {/* Select your Checkbox: */}
            <div className="">
                <input
                    type = {props.type}
                    value={props.value}
                    flag={checked}
                 onChange={onChange}
                    // disabled =  {props.disabled}
                />
                Checkbox
            </div>
            <div className="">
                Above checkbox is {checked ? "checked" : "unchecked"}.
            </div>
        </div>
    );
}
export default Checkbox