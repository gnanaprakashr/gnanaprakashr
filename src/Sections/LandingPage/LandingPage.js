import React from 'react'
import { useState, useEffect } from 'react'
import ThreeJsComponent from '@/components/ThreeJsComponent'

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
          <div className={`${'container'}`} id='mainContainer'>
               <div className={'leftContainer'}>
                    <h1>
                         <span>
                              {['G', 'N', 'A', 'N', 'A'].map((letter) => {
                                   return <span className={'letter'}>{letter}</span>
                              })}
                         </span>
                         <span className='secondName' style={{ display: 'block' }}>
                              {['P', 'R', 'A', 'K', 'A', 'S', 'H'].map((letter) => {
                                   return <span className={'letter'}>{letter}</span>
                              })}
                         </span>
                    </h1>
                    <p className={'description'}>
                         "As a frontend developer with experience in React, React Native, and
                         Next.js, I specialize in building user-friendly interfaces for both web and
                         mobile platforms. Currently focused on developing responsive websites using
                         Next.js, I bring a versatile skill set and a commitment to delivering
                         optimal user experiences."
                    </p>

                    <div className={'btnContainer'} id='btnContainer'>
                         <span>{'Contact ->'}</span>
                         <div
                              className='svgContainer'
                              style={{
                                   width: '100%',
                                   height: '100%',
                                   position: 'absolute',
                                   top: 0,
                                   right: 0,
                              }}
                         >
                              <svg
                                   width={rectValue?.width ? rectValue.width : 0}
                                   height={rectValue?.height ? rectValue.height : 0}
                              >
                                   <path
                                        id='svgPath'
                                        className={'path'}
                                        d={`M${rectValue.width * 0.5} ${
                                             rectValue.height
                                        } H${0} V${0} H${rectValue.width * 0.5}`}
                                        style={{
                                             fill: 'none',
                                             stroke: '#86442e',
                                             strokeWidth: 2.25,
                                        }}
                                   ></path>
                                   <path
                                        className={'path'}
                                        d={`M${rectValue.width * 0.5} ${0} H${
                                             rectValue.width * 1
                                        } V${rectValue.height * 1} H${rectValue.width * 0.5}`}
                                        style={{
                                             fill: 'none',
                                             stroke: '#86442e',
                                             strokeWidth: 2.25,
                                        }}
                                   ></path>
                              </svg>
                         </div>
                    </div>
               </div>
               <div id='world' className={'leftContainer'}>
                    <ThreeJsComponent />
               </div>
          </div>
     )
}

export default LandingPage
