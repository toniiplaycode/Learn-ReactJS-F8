import { BrowserRouter, Routes, Route} from "react-router-dom";
import DetailListUser from "./DetailListUser";
import HomeListUser from "./HomeListUser";
import './loading.css';

const ListUser = () => {    
    return(
        <BrowserRouter>
            <div>
                <h3>LIST USER</h3>
                
                    <Routes>
                        <Route path="/" element={<HomeListUser/>} /> 
                        <Route path="/:id" element={<DetailListUser/>}/>
                    </Routes>
            </div>
        </BrowserRouter>

    )
}

export default ListUser;