import React, { useState } from 'react'
import Checkbox from './Checkbox'



const Index = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e) => {
        console.log("check", e);
        setIsChecked(!isChecked);


    };

    return (
        <div>
            <Checkbox
                type="checkbox"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
                // disabled
            />

            
        </div>
    )
}

export default Index
