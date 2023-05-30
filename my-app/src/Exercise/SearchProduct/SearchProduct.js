import { useEffect, useState } from "react";
import './loading.css'
import { filter } from "mathjs";

const SearchUser = () => {
    const [listProduct, setListProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [listSearch, setListSearch] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect( async () => {
        setIsLoading(true);
        let reponse = await fetch('https://dummyjson.com/products');
        let data = await reponse.json();
        setListProduct(data.products);
        setIsLoading(false);

        console.log(data.products);
    },[])

    const handleSearch = () => {
        setIsEmpty(false);
        let newListUser = listProduct.filter((prouduct, index)=>{
            return prouduct.title.toLowerCase().includes(search.toLowerCase());
        });

        setListSearch(newListUser);

        console.log(listSearch);

        if(listSearch.length === 0) {
            setIsEmpty(true);
        }
    }

    return(
        <>  
            <div>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown = {handleSearch} />
            </div>   
            
            {isLoading
            ? 
            <div className ="lds-hourglass"></div>
            :
            <div>
                {isEmpty ? <div style={{color: 'red'}}>There are no products matching your search !</div>
                    :
                    <div>
                        {listSearch.length > 0 ?
                            listSearch.map((prouduct, index)=>{
                                return(
                                    <p key={index}>
                                        {prouduct.title}
                                        <br/>
                                        <img src={prouduct.images[0]} width='100px'/>
                                    </p>
                                )
                            })
                            :
                            listProduct.map((prouduct, index)=>{
                                return(
                                    <p key={index}>
                                        {prouduct.title}
                                    </p>
                                )
                            })
                            }
                    </div>
                }                
            </div>
            }       
        </>
    )
}

export default SearchUser;