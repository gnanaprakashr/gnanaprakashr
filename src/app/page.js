'use client'

import React from 'react'
import './page.scss'
import { useEffect, useState } from 'react'
import BallAnimation from '@/components/BallAnimation'
import LandingPage from '@/Sections/LandingPage/LandingPage'
import Experience from '@/Sections/experience/Experience'
import MyWorks from '@/Sections/myWorks/MyWorks'
import { myworkArr } from '@/constants/Data'
import ProjectCard from '@/Sections/myWorks/ProjectCard'
import Loading from './loading'

export default function Home() {
     const [windowWidth, setWindowWidth] = useState(null)

     useEffect(() => {
          if (window) {
               setWindowWidth(window.innerWidth)
          }
     }, [])
     return (
          <>
               {!windowWidth ? (
                    <Loading />
               ) : (
                    <div className='wrapper'>
                         <BallAnimation />
                         <div className='skyBackground'></div>
                         <div className='container' id='sectionWrapper'>
                              <LandingPage />
                              <Experience />
                              {windowWidth > 500 && <MyWorks />}
                              {windowWidth <= 500 && (
                                   <div className='workHeader' id='myworks'>
                                        <h2>Tech odyssey</h2>
                                        <p>Explore our tech projects, inspiring connections.</p>
                                   </div>
                              )}
                              {windowWidth <= 500 &&
                                   myworkArr.map((work, i) => {
                                        return (
                                             <div className='mobileWrapper' key={i}>
                                                  <ProjectCard workData={work} />
                                             </div>
                                        )
                                   })}
                         </div>
                    </div>
               )}
          </>
     )
}
