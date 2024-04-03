import React, { useEffect, useLayoutEffect, useState } from 'react'
import './projectCard.scss'
import montserrat from '@/assets/fonts/montserrat'
import Image from 'next/image'

function ProjectCard({ workData }) {
     // const [hoverIndex, setHoverIndex] = useState(null)
     const [width, setWidth] = useState(0)

     useLayoutEffect(() => {
          const element = document.getElementById(`${workData.name}_mockup`)
          if (element) {
               let { width } = element.getBoundingClientRect()
               setWidth(width * 0.8)
          }
     }, [])

     return (
          <div className='flipper'>
               <div className='cardContainer'>
                    <div className='front'>
                         <div
                              className='imageContainer'
                              style={{ width: '100%', height: '60%', overflow: 'hidden' }}
                         >
                              <img className='coverImage' src={workData.coverImage}></img>
                         </div>
                         <div className='bottomContainer'>
                              <h3 style={{ color: workData.colorCode }}>{workData.name}</h3>
                              <p>{workData.description}</p>
                         </div>
                    </div>
                    <div className='back'>
                         <div className='imageContainer' id={`${workData.name}_mockup`}>
                              <Image
                                   className='mockup'
                                   src={workData.mockup}
                                   alt='Mock up images'
                                   priority={true}
                              ></Image>
                         </div>
                         <div className='bottomContainer'>
                              <h4>Tech used</h4>
                              <div className='techWrapper'>
                                   {workData.techs.map((tech, i) => {
                                        return (
                                             <div
                                                  key={i}
                                                  // style={{
                                                  //      border: `1px solid ${workData.colorCode}`,
                                                  //      color:
                                                  //           hoverIndex == i
                                                  //                ? '#fff'
                                                  //                : workData.colorCode,
                                                  //      background:
                                                  //           hoverIndex == i
                                                  //                ? workData.colorCode
                                                  //                : 'transparent',
                                                  // }}
                                                  // onMouseEnter={() => setHoverIndex(i)}
                                                  // onMouseLeave={() => setHoverIndex(null)}
                                                  className='techNames'
                                             >
                                                  {tech}
                                             </div>
                                        )
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProjectCard
