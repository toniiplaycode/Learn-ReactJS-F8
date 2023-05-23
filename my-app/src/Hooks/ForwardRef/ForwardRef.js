import Video from "./videos";
import { useEffect, useRef } from 'react';

const ForwardRef = () => {
    const videoRef = useRef();

    
    useEffect(() => {
        console.log(videoRef.current);
    })

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }
    

    return(
        <div>
            <Video ref={videoRef}/>
            <br/>
            <button onClick={handlePlay}>PLAY</button>
            <button onClick={handlePause}>PAUSE</button>
        </div>
    )
}

export default ForwardRef;

// --> không thể dùng useRef để lấy được DOM của function component. dùng HOC là fowardRef bên component con mới lấy được DOM thông qua Ref