import React from 'react';
import '../../containers/header/box.css';
import './project.css';

const Project = ({ title, text, imgURL }) => {
  return (
    <div className="boxItem">
      <img src={imgURL} alt="" className='imageSize' />
      <div class="vic1__project-content">
        <div><h1>{title}</h1></div>
        <div><p>{text}</p></div>
      </div>
    </div>
  )
}

export default Project;