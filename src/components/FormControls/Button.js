import React from 'react'
import "./Button.scss"
function Button({ className = "", text="", icon="", onClick, iconPreOrPost = "post" }) {
  return (
    <button className={ 'c-button ' + className } onClick={onClick}>
        { iconPreOrPost === "pre" ? icon ? <img src={icon} alt={text}/> : null : null}
        {text ? <p className={ icon ? (iconPreOrPost === "pre" ? "pre" : "post") : null}>{text}</p> : null}
        { iconPreOrPost !== "pre" ? icon ? <img src={icon} alt={text}/> : null : null}
    </button>
  )
}

export default Button