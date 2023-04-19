import video1 from './videos/cupid.mp4';
import { forwardRef } from 'react';

function Video(props, ref){
    return(
        <video
            ref={ref}
            src={video1}
            width={400}
        />
    )
}

export default forwardRef(Video);

// --> không dùng controls trong thẻ video. khi dùng controls thì các nút thao tác là mặc định. mình muốn custom các nút thao tác nên không dùng controls

// --> tham số thứ 2 của component Video là ref của fowardRef