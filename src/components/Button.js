import React from "react"
import '../components/Button.css'

const Button = (props) =>{

    return(
        <button className="button">{props.buttonName}</button>
    )
}


export default Button;