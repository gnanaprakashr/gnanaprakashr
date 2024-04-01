import React, { useState, useEffect, useRef } from 'react'

const BallAnimation = () => {
     const canvasRef = useRef(null)
     const [w, setW] = useState(window.innerWidth)
     const [h, setH] = useState(window.innerHeight)
     let ctx
     let moon
     let stars = []
     let meteors = []

     useEffect(() => {
          const canvas = canvasRef.current
          ctx = canvas.getContext('2d')

          const resizeReset = () => {
               setW(window.innerWidth)
               setH(window.innerHeight)
               canvas.width = w
               canvas.height = h
          }

          const animationLoop = () => {
               ctx.clearRect(0, 0, w, h)
               drawScene()
               requestAnimationFrame(animationLoop)
          }

          const drawScene = () => {
               moon.draw()
               stars.forEach((star) => {
                    star.update()
                    star.draw()
               })
               meteors.forEach((meteor) => {
                    meteor.update()
                    meteor.draw()
               })
          }

          class Moon {
               constructor() {
                    this.x = 150
                    this.y = 150
                    this.size = 100
               }
               draw() {
                    ctx.save()
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                    ctx.shadowColor = 'rgba(254, 247, 144, .7)'
                    ctx.shadowBlur = 70
                    ctx.fillStyle = 'rgba(254, 247, 144, 1)'
                    ctx.fill()
                    ctx.closePath()
                    ctx.restore()
               }
          }

          class Star {
               constructor() {
                    this.x = Math.random() * w
                    this.y = Math.random() * h
                    this.size = Math.random() + 0.5
                    this.blinkChance = 0.005
                    this.alpha = 1
                    this.alphaChange = 0
               }
               draw() {
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`
                    ctx.fill()
                    ctx.closePath()
               }
               update() {
                    if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
                         this.alphaChange = -1
                    } else if (this.alphaChange !== 0) {
                         this.alpha += this.alphaChange * 0.05
                         if (this.alpha <= 0) {
                              this.alphaChange = 1
                         } else if (this.alpha >= 1) {
                              this.alphaChange = 0
                         }
                    }
               }
          }

          class Meteor {
               constructor() {
                    this.reset()
               }
               reset() {
                    this.x = Math.random() * w + 300
                    this.y = -100
                    this.size = Math.random() * 2 + 0.5
                    this.speed = (Math.random() + 0.5) * 15
               }
               draw() {
                    ctx.save()
                    ctx.strokeStyle = 'rgba(255, 255, 255, .1)'
                    ctx.lineCap = 'round'
                    ctx.shadowColor = 'rgba(255, 255, 255, 1)'
                    ctx.shadowBlur = 10
                    for (let i = 0; i < 10; i++) {
                         ctx.beginPath()
                         ctx.moveTo(this.x, this.y)
                         ctx.lineWidth = this.size
                         ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1))
                         ctx.stroke()
                         ctx.closePath()
                    }
                    ctx.restore()
               }
               update() {
                    this.x -= this.speed
                    this.y += this.speed
                    if (this.y >= h + 100) {
                         this.reset()
                    }
               }
          }

          init()

          function init() {
               resizeReset()
               moon = new Moon()
               for (let a = 0; a < w * h * 0.0001; a++) {
                    stars.push(new Star())
               }
               for (let b = 0; b < 2; b++) {
                    meteors.push(new Meteor())
               }
               animationLoop()
          }

          window.addEventListener('resize', resizeReset)

          return () => {
               window.removeEventListener('resize', resizeReset)
          }
     }, [w, h])

     return <canvas ref={canvasRef} id='canvas' />
}

export default BallAnimation
