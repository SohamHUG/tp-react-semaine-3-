import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';
import { addItemToCart } from '../../store/slice/cartSlice';
import toast from "react-hot-toast";
import { selectProducts, selectProductsStatus, selectProductsError, selectDarkMode } from "../../store/selectors/index";

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);
    const error = useSelector(selectProductsError);
    const darkMode = useSelector(selectDarkMode);
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const handleQuantityChange = (id, value) => {
        setQuantity({
            ...quantity,
            [id]: parseInt(value),
        });
    };

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        const qty = quantity[product.id] || 1;  
        dispatch(addItemToCart({ ...product, quantity: qty }));
        
        darkMode ? 
        toast.success("Product added to your basket !", 
        {style: {
            background: '#444444',
            color: '#fff',
        },})
        : toast.success("Product added to your basket !")
        
    };

    let content;

    if (status === 'loading') {
        content = <h2 style={{position: 'fixed', bottom: '50%', right: '50%'}}>Loading...</h2>;
    } else if (status === 'succeeded') {
        content = (
            <div className="product-container">
                {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className={`image-container ${darkMode ? 'dark' : ''}`}>
                        <img src={product.image} alt={product.title}></img>
                    </div>
                    <div className="content-product">
                        <p>
                            <span className="title">{product.title}</span>
                            <span className="category">{product.category}</span>
                        </p>
                        <p className="description">{product.description}</p>
                        <p className="price">$ {product.price}</p>
                        <form onSubmit={(e) => handleAddToCart(e, product)}>
                            <label>
                                Quantity:
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity[product.id] || 1} 
                                    onChange={(e) => handleQuantityChange(product.id, e.target.value)} 
                                />
                            </label>
                            <button className='classic-btn' type="submit">Add to basket</button>
                        </form>
                    </div>
                </div>
                ))}
            </div>
        );
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    );
};

export default ProductsList;
