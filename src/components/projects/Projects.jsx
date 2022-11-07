import React from 'react';
import Project from './Project';
import '../../containers/header/box.css';

const ProjectsData = [
  {
    title: 'Robo Friends 01',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  },
  {
    title: 'Robo Friends 02',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  },
  {
    title: 'Robo Friends 03',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  },
  {
    title: 'Robo Friends 04',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  },
  {
    title: 'Robo Friends 05',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  },
  {
    title: 'Robo Friends 06',
    text: 'Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala Blah bla blabl bl blbl balalala',
    imgURL: 'http://vicvalenti.co.za/static/media/munyaradzi.fa59e054ec269dfd0441.png'
  }
]

const Projects = () => {
  return (
    <div className="box3">
      {ProjectsData.map((item, index) =>
        <Project title={item.title} text={item.text} key={item.title + index} imgURL={item.imgURL} />
      )}


    </div>
  )
}

export default Projects