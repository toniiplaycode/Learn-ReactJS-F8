import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeListUser = () => {
    const [loading, setLoading] = useState(false);
    const [listUser, setListUser] = useState([]);

    useEffect(()=> {
        const getUsers = async () => {
            setLoading(true);

            const response = await fetch('https://reqres.in/api/users?page=1');
            const users = await response.json();
            setListUser(users.data);

            setLoading(false);
        }
        getUsers();
    }, []);

    console.log(listUser);

    return(
        <>
            {loading ? <div className="lds-dual-ring"></div> : 
            <ul>
                {listUser.map((user, index)=>{
                    return(
                        <li key={index}>
                            {`${user.last_name} ${user.first_name}`}
                            &nbsp;
                            <button>
                                <Link to={`/${index+1}`}>Detail</Link>
                            </button>
                        </li>
                    )
                })}
            </ul> 
            }
        </>
    )
}
export default HomeListUser;

