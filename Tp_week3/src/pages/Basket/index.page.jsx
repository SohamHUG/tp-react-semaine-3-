import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItemFromCart, updateItemQuantity } from '../../store/slice/cartSlice';
import toast from "react-hot-toast";


const BasketPage = () => {
    const user = useSelector((state) => state.user);
    const cartItems = useSelector((state) => state.cart.items);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());

        darkMode ?
            toast('Basket cleared !', {
                icon: '✅🗑️',
                style: {
                    background: 'black',
                    color: '#fff',
                },
            })
            : toast('Basket cleared !', {
                icon: '✅🗑️',
            })

    };

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
        darkMode ? 
        toast('Product removed successfully !', {
            icon: '✅🗑️',
            style: {
                background: 'black',
                color: '#fff',
            },
        })
        : toast('Product removed successfully !', {
            icon: '✅🗑️',
        })

    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity: parseInt(quantity) }));
    };

    const totalItems = cartItems.length;

    return (
        <section>
            <h1>Hi {user.firstname}!</h1>
            <h3>There are {totalItems} items in your basket</h3>
            {totalItems > 0 && <button className=' classic-btn clear-button' onClick={handleClearCart}>Clear Basket</button>}
            <div className="product-container">
                {cartItems.map((item) => (
                    <div className="product" key={item.id}>
                        <div className="image-container">
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className="content-product">
                            <p>
                                <span className="title">{item.title}</span>
                                <span className="category">{item.category}</span>
                            </p>
                            <p className="description">{item.description}</p>
                            <p className="price">$ {item.price}</p>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                />
                            </label>
                            <button className='classic-btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BasketPage;