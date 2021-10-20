import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    const {title, price, category, image, description} = product;
    return (
        <div>
            <div className="ui grid container">
                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <section className="py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 text-center m-auto">
                                    <a href="/"><img className="productImage" src={image} alt="product" /></a>
                                </div>
                                <div className="col-sm-6 py-5">
                                    <h5 className="my-2">{title}</h5>
                                    <table className="my-3">
                                        <tbody>

                                        <tr className="font-rale font-size-14">
                                            <td>Product Price:</td>
                                            <td className="font-size-20 text-danger">$<span>{price}</span><small className="text-dark font-size-12">&nbsp;&nbsp;Inclusive of all taxes</small></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p className="my-3 text-danger">by {category}</p>
                                    <h6 className="my-2">Product Description</h6>
                                    <p className="my-3">{description}</p>

                                    <div className="row pt-4">
                                        <div className="col-md-4">
                                            
                                            <button type="submit" className="btn btn-danger form-control">Proceed to Buy</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn btn-warning form-control">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )}
            </div>
        </div >
    )
}

export default ProductDetail;