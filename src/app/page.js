'use client'
import './page.scss'
import ThreeJsComponent from '@/components/ThreeJsComponent'
import { useEffect, useState } from 'react'
import BallAnimation from '@/components/BallAnimation'
import LandingPage from '@/Sections/LandingPage/LandingPage'

export default function Home() {
     return (
          <div className='wrapper'>
               <LandingPage />
               <div className='experienceContainer'>
                    <h2>Work Experience</h2>
                    <div>
                         <div>
                              <h3>Front end software developer</h3>
                         </div>
                    </div>
                    <div></div>
               </div>
               <BallAnimation />
          </div>
     )
}
