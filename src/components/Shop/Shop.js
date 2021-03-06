import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => error)
    }, []);
    const AddToCart = (product) => {
        const sameProduct = cart.find(pd => pd.id === product.id);
        let count = 1;
        if(sameProduct){
            count = product.quantity + 1;
            product.quantity = count;
            const others = cart.filter(pd => pd.id !== product.id);
            setCart([...others, product]);
        }else{
            product.quantity = 1;
            setCart([...cart, product]);
        }
        addToDatabaseCart(product.id, product.quantity);
    }
    useEffect(() => {
        const savedInCart = getDatabaseCart();
        const productId = Object.keys(savedInCart);
        const savedProducts = productId.map(id => {
            const product = products.find(pd => pd.id === id);
            return product;
        }) 
        console.log(savedProducts);
    }, [products])
    return (
        <div className="row p-3">
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(product => <Product AddToCart={AddToCart} key={product.id} product={product}/>)}
                </div>
            </div>
            <div className="col-md-4">
                <Cart cart={cart}>
                    <Link className="text-decoration-none" to="/review"><button className="btn btn-dark d-block">Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;