import { useEffect, useState } from "react";

const UseEffect = () => {
    // #1 chỉ có callback không có dependency (update DOM)
    //set lại title trên table chrome
    const [title, setTitle] = useState('');

    // useEffect(() => { 
    //     document.title = title; // update lại DOM 
    //     console.log(1); // 1 nằm trong callback nên sẽ in ra sau
    // });
    
    
    // #2 có callback và dependency là mảng rỗng (call API)
    //render các posts từ API
    const [users, setUsers] = useState([]);
        
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(users => {
    //         console.log(users);
    //     })

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(users => {
    //         setUsers(users);
    //     })
    // })

    // --> nếu call API viết ở ngoài thì sẽ request lại khi component re-render, nếu viết trong useEffect không có dependency thì request lại vô tận

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(users => {
    //         setUsers(users);
    //     })
    // }, [])

    // #3 có callback và có dependency (call API)
    const tabs = ['posts', 'comments', 'todos'];
    const [type, setType] = useState('posts');
    const [datas, setDatas] = useState([]);    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setDatas(data);
        })
    }, [type]) 


    // hiện nút scroll on top dùng useEffect #2 (DOM events)
    const [showGoToTop, setShowGoToTop] = useState(false); // false: ẩn, true: hiện

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200); // nếu scrollY >= 200 thì true, < 200 là false
        }
        window.addEventListener('scroll', handleScroll);

        console.log('addEventListener');
        
        // cleanup function
        return () => { // khi component umounted thì cleaup function sẽ thực thi
            window.removeEventListener('scroll', handleScroll);
            console.log('removeEventListener');
        }
    }, [])
    
    const handleGoOnTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div>
            {/* #1 chỉ có callback không có dependency */}
            {/* {console.log(2)}  */}
            {/* 2 sẽ in ra trước so với useEffect không có dependency */}
            {/* <input onChange={e => setTitle(e.target.value) }/> */}

            {/* #2 có callback và dependency là mảng rỗng */}
            {/* <ul>
                {
                    users.map((user, index) => 
                        <li key={index}>
                            {user.name}
                        </li>
                    )
                }
            </ul> */}

            {/* #3 có callback và có dependency */}
            {
                tabs.map((tab, index) => 
                    <button 
                        key={index}
                        onClick={() => setType(tab)}
                        style={type === tab ? {color: '#fff', background: '#333'} : {}}
                    >
                        {tab}
                    </button>
                )
            }
            <ul>
                {
                    datas.map((data, index) => 
                        <li key={index}>
                            {data.title || data.name}
                        </li>
                    )
                }
            </ul>
            
            {/* hiện nút scroll on top dùng useEffect #2 (DOM events) */}
            {showGoToTop &&
            <button
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                    width: '80px',
                    height: '30px'
                }}
                onClick={handleGoOnTop}
            >
                Go to Top
            </button>
            }
        </div>
    )
}

export default UseEffect;