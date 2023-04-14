import React from 'react';
import {useState} from 'react';
import Radio from './Radio';
import Radiogroup from './Radiogroup';
import RadioButton from './RadioButton';


const Index = () => {

    const [value, setValue] = useState();

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    }

    return (
        <>
            <Radiogroup onChange={onChange} value={value} defaultValue={2}>
                <Radio value={1} name='a'>A</Radio>
                <Radio value={2} name='b'>B</Radio>
                <Radio value={3} name='c'>C</Radio>
                <Radio value={4} name='d'>D</Radio>
            </Radiogroup>


            <Radiogroup onChange={onChange} defaultValue="a" value={value} buttonStyle="outline">
                <RadioButton value="a" disabled>Hangzhou</RadioButton>
                <RadioButton value="b">Shanghai</RadioButton>
                <RadioButton value="c">Beijing</RadioButton>
                <RadioButton value="d">Chengdu</RadioButton>
            </Radiogroup>

        </>
    )
}
export default Index






