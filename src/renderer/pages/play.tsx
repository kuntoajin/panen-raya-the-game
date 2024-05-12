import { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";

export const Play = (props: any) => {
        const canvasRef = useRef(null)
    
   
    
    return (
      <div>
            <canvas ref={canvasRef} {...props}/>
        <Link to={`/`}>back</Link>
      </div>
    );
  }