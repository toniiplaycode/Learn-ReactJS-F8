import { useMemo, useRef, useState } from "react";

const UseMemo = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const inputRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {name: name, price: Number(price)}]);

        setName('');
        setPrice('');

        inputRef.current.focus(); // dùng useRef để lấy được DOM element của input sau đó focus vào (hàm focus() là hàm của DOM không phải của React)
    }

    // khi không dùng useMemo thì hàm reduce sẽ tính lại liên tục khi component re-render 
    // const total = products.reduce((init, product) => {
    //     console.log('Tính toán...');
    //     return init + product.price;
    // }, 0)

    // dùng useMemo khi state products thay đổi thì hàm reduce mới tính toán
    const total = useMemo(() => {
        const result = products.reduce((init, product) => {
            return init + product.price;
        }, 0)
        
        console.log('Tính toán...');
        console.log(products);

        return result;
    }, [products])

    return(
        <div>
            <input
                ref={inputRef}
                value={name}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>ADD</button>

            <h2>Total: {total}</h2>

            <ul>
                {products.map((product, index) => {
                    return(
                        <li key={index}>
                            {product.name} - {product.price}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UseMemo;