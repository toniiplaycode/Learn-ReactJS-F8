// useState

import {useState} from 'react';

function Info() {
    const [info, setInfo] = useState({
        Name: 'Tonii',
        Age: 20
    })
    const handleUpdateInfo = () => {
        setInfo({ // kết hợp với spead để giữ nguyên các state khởi tạo
            ...info,
            Address: 'Can Tho'
        })
    }
    
    const [description, setDecription] = useState('Description from input');


    return(
        <div>
            <p>{JSON.stringify(info)}</p>
            <button onClick={handleUpdateInfo}>Click</button> 
            <br/>
            <input onChange={e => setDecription(e.target.value)}></input>
            <p>{description}</p>
        </div>
    ); 
}

export default Info;