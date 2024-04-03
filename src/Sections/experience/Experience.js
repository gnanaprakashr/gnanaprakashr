import React from 'react'
import './experience.scss'

function Experience() {
     const technologies = [
          {
               name: 'REACT JS',
               link: 'https://react.dev/',
          },
          {
               name: 'REACT NATIVE',
               link: 'https://reactnative.dev/',
          },
          {
               name: 'EXPO',
               link: 'https://expo.dev/',
          },
          {
               name: 'FIGMA',
               link: 'https://www.figma.com/',
          },
          {
               name: 'ANT DESIGN',
               link: 'https://ant.design/',
          },
          {
               name: 'GSAP',
               link: 'https://gsap.com/',
          },
     ]
     return (
          <div className='experienceContainer'>
               <h2>Work experience</h2>
               <div className='position'>
                    Junior software developer |{' '}
                    <a href='https://www.bytecompass.tech/' target='_blank' className='company'>
                         Bytecompass LLP
                    </a>
               </div>
               <div className='address'>April 2022 - Current | Madurai, IN</div>

               <ul className='pointsContainer'>
                    <li>
                         We have completed the development and deployment of a new website for our
                         company. The redesigned website features enhanced animations, improved
                         responsiveness, and a fresh new look.
                    </li>
                    <li>
                         As part of team of 6 developers, I was responsible for handling all of the
                         frontend works for the web and mobile applications
                    </li>
               </ul>

               <div className='techContainer'>
                    <h3>Technologies:</h3>
                    <div>
                         {technologies.map((tech) => {
                              return (
                                   <a className='technologies' href={tech.link} target='_blank'>
                                        {tech.name}
                                   </a>
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Experience
