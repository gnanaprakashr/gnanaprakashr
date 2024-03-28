"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import './page.scss';
import ThreeJsComponent from "@/components/ThreeJsComponent";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingData from '../assets/lottieJSON/Loading_Animation.json';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rectValue, setRectValue] = useState({width: 0, height: 0})


  useEffect(() => {
    const path = document.getElementById('svgPath');
    if(path){
      const len = path.getTotalLength()
      const paths = document.querySelectorAll('.path');
      paths.forEach((elem) => {
        elem.style.setProperty('--svglength', len)
      })
    }
    
  }, [rectValue])

  useEffect(() => {
    setTimeout(() => {
        setIsLoaded(false)      
        const element = document.getElementById('btnContainer');

        if(element){
          let rect = element.getBoundingClientRect();
          setRectValue(rect);
        }
    }, 100)
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className={'container'} style={{justifyContent: 'center'}}>
          <Lottie animationData={loadingData} style={{width: '25%', height: 'auto'}} loop={true} />
        </div>
      ) : (
        <div className={`${'container'} ${!isLoaded ? 'animation' : ''}`} id="mainContainer">
          <div className={'leftContainer'}>
            <h1>
              <span>
                {["G", "N", "A", "N", "A"].map((letter) => {
                  return <span className={'letter'}>{letter}</span>;
                })}
              </span>
              <span style={{ display: "block" }}>
                {["P", "R", "A", "K", "A", "S", "H"].map((letter) => {
                  return <span className={'letter'}>{letter}</span>;
                })}
              </span>
            </h1>
            <p className={'description'}>
              "As a frontend developer with experience in React, React Native,
              and Next.js, I specialize in building user-friendly interfaces for
              both web and mobile platforms. Currently focused on developing
              responsive websites using Next.js, I bring a versatile skill set
              and a commitment to delivering optimal user experiences."
            </p>

            <div className={'btnContainer'} id="btnContainer">
              <span>{"Contact ->"}</span>
              <div
                className="svgContainer"
                style={{ width: "100%", height: "100%", position: 'absolute', top: 0, right: 0}}
              >
                <svg
                 width={rectValue?.width ? rectValue.width : 0}
                 height={rectValue?.height ? rectValue.height : 0}
                >
                  <path
                    id="svgPath"
                    className={'path'}
                    d={`M${rectValue.width * 0.5} ${rectValue.height} H${0} V${0} H${rectValue.width * 0.5}`}
                    style={{
                         fill: 'none',
                         stroke: '#8E3E3E',
                         strokeWidth: 2.25,
                    }}
                  >

                  </path>
                  <path
                  className={'path'}
                    d={`M${rectValue.width * 0.5} ${0} H${rectValue.width * 1} V${rectValue.height * 1} H${rectValue.width * 0.5}`}
                    style={{
                         fill: 'none',
                         stroke: '#8E3E3E',
                         strokeWidth: 2.25,
                    }}
                  >

                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div id="world" className={'leftContainer'}>
            <ThreeJsComponent />
          </div>
        </div>
      )}
    </>
  );
}
