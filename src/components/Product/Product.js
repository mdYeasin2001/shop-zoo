import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {title, description, image, price, category, id} = props.product;
    return (
        <div className="col">
            <div className="card h-100 p-3">
                <img src={image} className="card-img-top img-fluid h-50" alt="..." />
                <div className="card-body">
                    <Link to={`/shop/${id}`}><h5 className="card-title">{title}</h5></Link>
                    <h5>Price: ${price}</h5>
                    <p><small>Category: {category}</small></p>
                </div>
                <div className="card-footer bg-white">
                    <button onClick={() => props.AddToCart(props.product)} className="btn btn-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;