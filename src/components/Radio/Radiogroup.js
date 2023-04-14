import React from 'react'
import './index.css'
import Radio from './Radio'


import { useState } from 'react'


const Index = (props) => {

    const [groupValue, setGroupValue] = useState(props.defaultValue)
    // let value = props.value != undefined || props.value != null ? props.value : groupValue;      ORIGINAL
    let value = props.value !== undefined || false ? props.value : groupValue;

    const onChangeValue = (e) => {
        if (props.onChange)
            props.onChange(e)
        setGroupValue(e.target.name)
    }
    return (
        <div>
            <div className='inline-flex'>
                {
                    props.children.map((item, index) => {
                        if (item.type.name === "Radio")
                            return <Radio
                                key={index}
                                value={item.props.value}
                                checked={value == item.props.value}
                                onChange={onChangeValue}
                                name =  {item.props.name}
                                disabled = {item.props.disabled}
                            >
                                {item.props.children}
                            </Radio>
                        else
                            return item
                    })
                }
            </div>
        </div>
    )
}
export default Index












