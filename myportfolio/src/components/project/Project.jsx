import './project.css';

const Project = ({img,link}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-box">
        <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="Not found" className="p-img"/>
        </a>
      </div>
    </div>
  )
}

export default Project;