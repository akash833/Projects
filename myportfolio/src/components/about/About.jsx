import './about.css';

const About = () => {
  return (
    <div className="a" id='about'>
      <div className="a-title" >
        About Me
      </div>
      
      <div className="a-m-left-br">
       <div className="a-m-left"></div>
      </div>

      <div className="a-bg">     
        <div className="a-left-br"></div>
        <div className="a-left"></div>
        <div className="a-right">
          <div className="a-desc">
            Hi, I'm Akash Gupta, currently pursuing B.TECH in Computer Science from MAIT (GGIPU). I am a tech enthusiast who loves to solve pervailing real world problems with help of technology.
            <br />
            <br />
            My interest lies in problem solving and web development.
            I am passionate about MERN stack and always ready to learn new tech stack.
            <br />
            <br />
            My passion for technology pushes me everyday to learn and solve different problems. I am aspiring to be a successfull <b>Developer</b> where I can use my knowledge base as well as personal attributes to achieve the organisational goals.
          </div>
        </div>
      </div>
      {/* UP TO TOP */}
      <div className="up_to_top_btn">
        <a href="#" className='bottom_to_top'>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
        </a>
      </div>
    </div>
  )
}

export default About;