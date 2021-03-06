import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const {image, category, description, title, price} = product;
    const { key } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${key}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [key])
    
    return (
        <div className="card m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="py-3 ps-5 ms-5" style={{ height: '300px', width: '350'}} src={image} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>Price: {price}</p>
                        <p className="card-text"><small className="text-muted">category: {category}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;