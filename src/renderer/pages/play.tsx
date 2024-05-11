import { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";

export const Play = (props: any) => {
        const canvasRef = useRef(null)
    
    const draw = (ctx: any, frameCount: any) => {
        let img = new Image()
        
        ctx.clearRect(0, 0, 500, 500)
        img.onload = () => {
            ctx.drawImage(img, 100, 100)
        }

        img.src = 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg';
      }

    useEffect(() => {
        const canvas: any = canvasRef?.current
        const context = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId: any
        
        //Our draw came here
        const render = () => {
            frameCount++

            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
    
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
    
    return (
      <div>
            <canvas ref={canvasRef} {...props}/>
        <Link to={`/`}>back</Link>
      </div>
    );
  }