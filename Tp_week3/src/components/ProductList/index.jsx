import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <p>Loading...</p>;
    } else if (status === 'succeeded') {
        content = (
            <div className={'product-container'}>
                {products.map((product) => (
                <div className={'product'} key={product.id}>
                    <div className={'image-container'}>
                        <img src={product.image}></img>
                    </div>
                    <div className={'content-product'}>
                        <p>
                            <span className={'title'} >{product.title}</span>
                            <span className={'category'} >{product.category}</span>
                        </p>
                        <p className={'description'} >{product.description}</p>
                        <p className={'price'} >$ {product.price}</p>
                        <form action="">
                            <label htmlFor="">
                                Quantity :
                                <input type="number" />
                            </label>
                            <button type='submit'>Add to basket</button>
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
