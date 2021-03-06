import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => error)
    }, [])
    return (
        <div className="row p-3">
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(product => <Product key={product.id} product={product}/>)}
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default Shop;