import './navbar.css';
import MyIcon from '../../img/my_icon.png';
import Hireme from '../../img/hire_me.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Navigation = () => {

  const theme = useContext(ThemeContext);
  const darkMode =theme.state.darkMode;
  
  function handlebtnclick1(){
      document.querySelector('.m').style.display="block";
      document.querySelector('.n-1').style.display="none";
      document.querySelector('.n-2').style.display="block";
  }
  function handlebtnclick2(){
      document.querySelector('.m').style.display="none";
      document.querySelector('.n-1').style.display="block";
      document.querySelector('.n-2').style.display="none";
  }

  return (
    <>
    <div className='n-icon'>
          <img src={MyIcon} alt="hello" className="my-icon" />
    </div>

    <a href='#contact' className='c-hire-link'>
          <img src={Hireme} alt="hello" className="c-hire" />
    </a>

    <button className='n-m-menu n-1' onClick={handlebtnclick1}>
    <span class="material-icons">menu</span>
    </button>

    <button className='n-m-menu n-2' onClick={handlebtnclick2}>
    <span class="material-icons">
close
</span>
    </button>

    
    <div className='n' style={{backgroundColor:darkMode && "#222"}}>
      <div className="n-button">
        <a style={{color:"#5563fa"}} href='#'>Home</a>
        <a style={{color:"#5563fa"}} href='#about'>About</a>
        <a style={{color:"#5563fa"}} href='#skills'>Skills</a>
        <a style={{color:"#5563fa"}} href='#project'>Project</a>
        <a style={{color:"#5563fa"}} href='#contact'>Contact</a>
      </div> 
    </div>

     
     <div className='m' style={{backgroundColor:darkMode && "#222"}}>
     <div className="n-menu-all-btn">
       <div>
         <a style={{color:"#5563fa"}} href='#'>Home</a>
       </div>
       <div>
        <a style={{color:"#5563fa"}} href='#about'>About</a>
       </div>
       <div>
        <a style={{color:"#5563fa"}} href='#skills'>Skills</a>
       </div>
       <div>
        <a style={{color:"#5563fa"}} href='#project'>Project</a>
       </div>
       <div>
         <a style={{color:"#5563fa"}} href='#contact'>Contact</a>
       </div>
      </div>
     </div>
    </>
  )
}

export default Navigation;