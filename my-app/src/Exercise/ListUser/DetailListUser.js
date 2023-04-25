import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailListUser = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(()=> {
        const getUser = async () => {
            setLoading(true);
            
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const user = await response.json();
            setUser(user.data);

            setLoading(false);
        }
        getUser();
    }, []);

    console.log(user);

    return(
        <>
            {loading ? <div className="lds-dual-ring"></div> : 
            <>
                <img src={user.avatar} />
                <div>
                    Email: {user.email}
                </div>
                <div>
                    Name: {`${user.last_name} ${user.first_name}`}
                </div>
                <button>
                    <Link to="/">HOME</Link>
                </button>
            </>
            }
        </>
    )
}

export default DetailListUser;