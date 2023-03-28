import React from "react";

const Button = (props) => {
    const { onClick, title } = props
    return <button onClick={onClick}>{title}</button>
}


export default Button;