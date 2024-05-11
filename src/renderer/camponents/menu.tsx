import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const Menu = (props: any) => {
    // const canvasRef = useRef(null)
    
    // const draw = (ctx: any, frameCount: any) => {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    //     ctx.fill()
    //   }

    // useEffect(() => {
    //     const canvas: any = canvasRef?.current
    //     const context = canvas.getContext('2d')

    //     let frameCount = 0
    //     let animationFrameId: any
        
    //     //Our draw came here
    //     const render = () => {
    //     frameCount++

    //     draw(context, frameCount)
    //         animationFrameId = window.requestAnimationFrame(render)
    //     }
    //     render()
    
    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId)
    //     }
    // }, [draw])

    return (
        <div className='flex flex-col items-center justify-center h-dvh	'>
            {/* <canvas ref={canvasRef} {...props}/> */}
            <Link to={`play`}>start</Link>
            <Link to={`settings`}>setting</Link>
        </div>
    )
}
