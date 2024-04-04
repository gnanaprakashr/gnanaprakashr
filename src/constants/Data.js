import rapidloops from '../assets/images/rapidloops.svg'
import investo from '../assets/images/investo.svg'
import prism from '../assets/images/prism.svg'
import rapidloopsMockup from '../assets/images/rapidloops_mockup.png'
import investoMockup from '../assets/images/investo_mockup.png'
import prismMockup from '../assets/images/prism_mockup.png'

export const myworkArr = [
     {
          name: 'Rapid loops',
          description:
               'A versatile mobile and web platform that is centered on addressing the capital challenges of logistics.',
          coverImage: rapidloops.src,
          colorCode: '#d6b164',
          mockup: rapidloopsMockup,
          techs: ['React JS', 'Recharts', 'Ant Design', 'Figma'],
     },
     {
          name: 'Investo',
          description:
               'A fintech app that conducts investment analysis and crafts personalized strategies to fulfill user’s financial aspirations.',
          coverImage: investo.src,
          colorCode: '#5E8BFC',
          mockup: investoMockup,
          techs: ['React JS', 'React Native', 'Ant Design', 'Figma', 'Firebase'],
     },
     {
          name: 'Prism',
          description:
               'Integrated and connected workforce management ecosystem. One solution to manage all your frontline workforce needs.',
          coverImage: prism.src,
          mockup: prismMockup,
          colorCode: '#c070fe',
          techs: ['React JS', 'React Native', 'Ant Design', 'Razorpay', 'Victory C', 'Figma'],
     },
]
