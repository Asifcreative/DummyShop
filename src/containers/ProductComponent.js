import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, price, category, image } = product;
        return (
            <div className="col-md-4 my-3" key={id}>
                    <div className="card" style={{width: '18rem'}}>
                <Link to={`/product/${id}`}>
                        <img src={image} className="card-img-top text-center p-3" alt={title}/>
                </Link>
                        <div className ="card-body">
                        <h5 className ="card-title">{title}</h5>
                        </div>
                        <ul className ="list-group list-group-flush">
                        <li className ="list-group-item">Price : ${price}</li>
                        <li className ="list-group-item">{category}</li>
                        </ul>
                    </div>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )
}

export default ProductComponent;