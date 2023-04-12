import { useEffect,useState } from "react";

const UseEffect2 = () => {  
    //#1 đếm ngược
    const [countDown, setCountDown] = useState(60)

    // setInterval(()=>{
    //     setCountDown(countDown - 1);
    // }, 1000)
    // --> setInterval là web API của trình duyệt khi mỗi lần setCountDown thì trình duyệt nó sẽ tạo ra 1 setInterval, nên điều này sẽ setInterval vô hạn

    // dùng useEffect #2
    // useEffect(() => {
    //     // setInterval của trình duyệt có 1 ID
    //     const timerId = setInterval(()=>{
    //         setCountDown(prevState => prevState - 1); // dùng callback để setState
    //     }, 1000)

    //     // cleanup function
    //     return () => clearInterval(timerId);
    // }, []);

    //#2 tăng đếm, cleanup function được gọi trước callback (trừ lúc component Mount là callback sẽ được gọi trước)
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log(`Mounted or Re-render ${count}`);

    //     //cleanup function
    //     return () => {
    //         console.log(`cleanup ${count}`);
    //     }
    // }, [count])

    //#3 tải ảnh lên, nếu tải hơn 1 lần thì cleanup function các ảnh trước đó khỏi bộ nhớ
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // cleanup function
        return () => { // khi tải ảnh thứ hai thì ảnh trước đó sẽ được xoá đi...
            avatar && URL.revokeObjectURL(avatar.preview); // nếu có avatar mới thì mới xoá
            console.log('call cleanup', avatar);      
        }
    }, [avatar]);
    
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        // tạo URL: URL.createObjectURL(), file là object nên tạo 1 key mới là preview và gán value bằng URL mới
        file.preview = URL.createObjectURL(file);

        setAvatar(file);

        console.log(file.preview);
    }

    return(
        <div>
            {/* #1 */}
            {/* {countDown} */}

            {/* #2 */}
            {/* {count}
            <br/>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button> */}

            {/* #3 */}
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            <br/>
            {avatar && 
                <img 
                    src={avatar.preview} alt=""
                    style={{borderRadius: '10px', width: '100px'}}
                />
            }
        </div>
    )
}

export default UseEffect2;