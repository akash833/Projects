import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick=()=>{
      theme.dispatch({type:"TOGGLE"})
  }

  let fill=theme.state.darkMode?"DARK":"LIGHT";
  let fill2=theme.state.darkMode?"D":"L";
  
  return (
    <>
    <div className="t">
        <div className="t-button" onClick={handleClick} style={{ left:theme.state.darkMode ? "25px" : 0}}><span className="t-icon">{fill}</span></div>
    </div>

    <div className="t-m">
        <div className="t-m-button" onClick={handleClick} style={{ left:theme.state.darkMode ? "16px" : 0}}><span className="t-m-icon">{fill2}</span></div>
    </div>
    </>
  )
}

export default Toggle;
