import "./contact.css";
import Phone from  "../../img/phone.png";
import Email from  "../../img/email.png";
import Address from  "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done,setDone]=useState(false);

  const theme = useContext(ThemeContext);
  const darkMode =theme.state.darkMode;

  const handleSubmit=(e)=>{
      e.preventDefault();

      emailjs.sendForm(
      'service_1skswgg', 
      'template_apw5syw', 
      formRef.current,
      'RRS-Oufp791ZQ3YMG',
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

  }
  return (
    <div className="c" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone} 
                        alt="" 
                        className="c-icon" />
                        +91 7011176153
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email} 
                        alt="" 
                        className="c-icon" />
                        akash.mait20@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address} 
                        alt="" 
                        className="c-icon" />
                        New Delhi , India
                    </div>
                </div>
            </div>
            <div className="c-right">
                    <div className="c-avaliable">Available for hire</div>
                <p className="c-desc">
                   <b>What's your story?</b> Get in touch. Always ready 
                   for freelancing and intership opportunity.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    <br/>
                    <br/>
                    {done && "Your mail is sent to Akash usefully thank you"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;