import React from 'react'
import Option from './Option'
import Selected from './Select'



const Dropdown = () => {
    const [value, setValue] = React.useState();

    const onChange = (e) => {
           setValue(e.target.value);
    }
  
    return (
        <>
            <label for="cars">Choose a car:</label>
            <Selected name="cars" defaultValue="volvo" onChange={onChange} value={value} >
                <Option value="volvo">Volvo</Option>
                <Option value="Dezire" disabled>Dezire</Option>
                <Option value="Honda" >City</Option>
                <Option value="Kia">Seltos</Option>
                
            </Selected>
        </>
    )
}

export default Dropdown
