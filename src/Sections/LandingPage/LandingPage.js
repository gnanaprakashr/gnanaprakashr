import React from 'react'
import { useState, useEffect } from 'react'
import './LandingPage.scss'

function LandingPage() {
     const [rectValue, setRectValue] = useState({ width: 0, height: 0 })

     useEffect(() => {
          setTimeout(() => {
               const element = document.getElementById('btnContainer')

               if (element) {
                    let rect = element.getBoundingClientRect()
                    setRectValue(rect)
               }
          }, 1)
     }, [])

     return (
          <div className='landingPageContainer'>
               <h1>
                    <span className='welcomeText'>Hi</span>
                    <span className='introText'>, I am</span>
                    <span className='firstName'>
                         {['G', 'N', 'A', 'N', 'A'].map((letter) => {
                              return <span className={'letter'}>{letter}</span>
                         })}
                    </span>
                    <span className='secondName'>
                         {['P', 'R', 'A', 'K', 'A', 'S', 'H'].map((letter) => {
                              return <span className={'letter'}>{letter}</span>
                         })}
                    </span>
               </h1>
               <p className={'description'}>
                    "As a frontend developer with experience in React, React Native, and Next.js, I
                    specialize in building user-friendly interfaces for both web and mobile
                    platforms. Currently focused on developing responsive websites using Next.js, I
                    bring a versatile skill set and a commitment to delivering optimal user
                    experiences."
               </p>

               <div className={'btnContainer'} id='btnContainer'>
                    <span>View my works</span>
               </div>
          </div>
     )
}

export default LandingPage
