import './home.css';
import Myresume from '../../img/My_Resume.pdf';


import Linkden from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import Github from "../../img/GitHub.png";
import { ThemeContext } from '../../context';
import { useContext } from 'react';


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i" id='home'>
      <div className="i-left">
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, I'm</h2>
          <h1 className='i-name'>AKASH GUPTA</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">FRONT-END DEVELOPER</div>
              <div className="i-title-item">PROBLEM SOLVER</div>
              <div className="i-title-item">TECH-ENTHUSIAST</div>
              <div className="i-title-item">ASPIRING SOFTWARE DEVELOPER</div>
              <div className="i-title-item">EDUCATOR</div>
            </div>
          </div>
          
          <a href={Myresume} download="Akashresume" target="_blank">
          <button className='i-resume'>Dowload Resume</button>
          </a>

          <div className='i-ids-button'>
            <a href="https://github.com/akash833" target='_blank' className="i-github"><img src={Github} alt="" className="github" /></a>
            <a href="https://www.linkedin.com/in/akash9891/" target='_blank' className='i-linkden'><img src={Linkden} alt="" className="linkden" /></a>
            <a href="https://twitter.com/AkashMait20" target='_blank' className='i-twitter'><img src={Twitter} alt="" className="twitter" /></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className='i-desc' style={{ backgroundColor: darkMode && "#222" }}>
          <pre>1&nbsp;&nbsp;class
            <b> Person</b>&#123;</pre>
          <pre>
            2&nbsp;&nbsp;&nbsp;&nbsp;
            constructure()&#123;
          </pre>
          <pre>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            this.name="Akash Gupta";
          </pre>
          <pre>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            this.traits=["DSA","DEV"];
          </pre>
          <pre>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            this.age=new Date().getFullYear()-2000;
          </pre>
          <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&#125;
          </pre>
          <pre>7&nbsp;&nbsp;&#125;
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Home;