import React from "react";
import './button.css'

export default props =>
<button    
    className={`Button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : '' }
    `}
    onClick={e => props.click && props.click(props.label)}>

    {props.label}</button>