'use client'

import React from 'react'
import './page.scss'
import ThreeJsComponent from '@/components/ThreeJsComponent'
import { useEffect, useState } from 'react'
import BallAnimation from '@/components/BallAnimation'
import LandingPage from '@/Sections/LandingPage/LandingPage'
import Experience from '@/Sections/experience/Experience'
import MyWorks from '@/Sections/myWorks/MyWorks'
import { myworkArr } from '@/constants/Data'
import ProjectCard from '@/Sections/myWorks/ProjectCard'

export default function Home() {
     return (
          <div className='wrapper'>
               <BallAnimation />
               <div className='skyBackground'></div>
               <div className='container' id='sectionWrapper'>
                    <LandingPage />
                    <Experience />
                    {window?.innerWidth > 500 && <MyWorks />}
                    {window?.innerWidth <= 500 && (
                         <div className='workHeader' id='myworks'>
                              <h2>Tech odyssey</h2>
                              <p>Explore our tech projects, inspiring connections.</p>
                         </div>
                    )}
                    {window?.innerWidth <= 500 &&
                         myworkArr.map((work, i) => {
                              return (
                                   <div className='mobileWrapper'>
                                        <ProjectCard workData={work} />
                                   </div>
                              )
                         })}
               </div>
          </div>
     )
}
