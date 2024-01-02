import React from "react";
import "../App.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  const toggleTheme = e => {
    if(e.target.checked) setDarkMode();
    else setLightMode()
  }
  return(
   <>
      <div className="theme" onChange={toggleTheme}>         
        <input type="checkbox" className="dark_mode_input checkmark" id="darkmode-toggle" />
        <span className="Checkbox"></span>
      </div>
   </> 
  )
}

export default DarkMode;