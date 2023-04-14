import React, { useEffect, useState } from 'react';
import './index.css'
const Index = (props) => {
    console.log(props)
    const [style, setStyle] = useState('wg_btn')
    const [size, setSize] = useState('')
    const [shape, setShape] = useState('')
    useEffect(() => {
        switch (props.type) {
            case "primary":
                setStyle(style + ' wg_btn_primary')
                break;
            case "dashed":
                setStyle(style + ' wg_btn_dashed')
                break;
            case "text":
                setStyle(style + ' wg_btn_text')
                break;
            case "link":
                setStyle(style + ' wg_btn_link')
                break;
        }
        switch (props.size) {
            case "small":
                setSize(' wg_btn_sm')
                break;
            case "large":
                setSize(' wg_btn_lg')
                break;
        }
        switch (props.shape) {
            case "circle":
                setShape(' rounded-full')
                break;
            case "round":
                setShape(' rounded')
                break;
        }
    }, [])
    return (
        <button className={style + size + shape}>{props.children}</button>
    );
}
export default Index;