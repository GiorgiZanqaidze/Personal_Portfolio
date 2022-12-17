import React, {useState} from 'react'

import './style/Projects.css'

// json url
import jsonData from './data.json'

let data2 = jsonData.websites
export const MyWork = () => {

  const [popUpIndex, setPopUpIndex] = useState(null)
  const [data, setData] = useState(data2)

// show describtion
  const handleShow = (id) => {
    setPopUpIndex(id)
  }
// hide describtion
  const handleHide = () => {
    setPopUpIndex(null)
  }


  
  return (
    <section className='projects-container'>
      <article className='projects'>
        <h2>My Projects</h2>
        <div className='websites'>
          <ul className='websites-list'>
            {data.map((item, index) => {
              const {id, href, title, url, use, type} = item
              return (
                <li className='item' onMouseOver={() => handleShow(id)} onMouseOut={handleHide} key={index}>
                    <a href={href} target="blank">
                      <img src={url} alt='project' id={id}/>
                      <div className={`describtion ${popUpIndex === id ? '' : 'show-desc'}` }  >
                        <h2>{type}</h2>
                        <h4>title: {title}</h4>
                        <p>Use: {use}</p>
                      </div>
                    </a>
                </li>
              )
            })} 
          </ul>
        </div>
      </article>
    </section>
  )
}


