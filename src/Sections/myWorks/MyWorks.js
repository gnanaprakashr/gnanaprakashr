import React from 'react'
import './myWorks.scss'
import ProjectCard from './ProjectCard'

import { myworkArr } from '@/constants/Data'

function MyWorks() {
     return (
          <div className='myWorksContainer' id='myworks'>
               <div>
                    <h2>Tech odyssey</h2>
                    <p>Explore our tech projects, inspiring connections.</p>
               </div>
               <div className='projectsWrapper'>
                    {myworkArr.map((work, i) => {
                         return (
                              <React.Fragment key={i}>
                                   <ProjectCard workData={work} />
                              </React.Fragment>
                         )
                    })}
               </div>
          </div>
     )
}

export default MyWorks
