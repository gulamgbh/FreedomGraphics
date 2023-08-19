import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProductDetailsById } from '../../redux/action/product.action'
import { useDispatch, useSelector } from 'react-redux';
import { PriceFormat } from '../global-components/PriceFormat';
import Rating from './Rating';
import Quantity from './Quantity';
import { addToCart } from '../../redux/action/addToCart.action.js';


function SingleProductIndexComponent() {
    let history = useNavigate();
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.product.productDetails)
    let stock = 5
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        const payload = {
            params: {
                productId: id
            }
        }
        dispatch(getProductDetailsById(payload));
    }, []);
    if (Object.keys(productDetails).length === 0) {
        return null;
    }

    // increment and decrement 
    const setDecrement = () => {
        qty > 1 ? setQty(qty - 1) : setQty(1)
    }
    const setIncrement = () => {
        qty < stock ? setQty(qty + 1) : setQty(stock)

    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card" id={productDetails._id}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4"> <img id="main-image" src={productDetails.image} width="250" /> </div>
                                        {/* <div className="thumbnail text-center"> <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70" /> <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{productDetails.category}</span>
                                            <h5 className="text-uppercase">{productDetails.title}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price fw-bold"><PriceFormat price={productDetails.price} /></span>
                                            </div>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price fw-bold"><Rating star={productDetails.rating.rate} count={productDetails.rating.count} /></span>
                                            </div>
                                        </div>
                                        <p className="about">{productDetails.description}</p>
                                        {/* <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Size</h6>
                                            <label className="radio border border-secondary border-5 px-2 py-1 ">
                                                <input type="radio" name="size" className='mx-2' value="S" checked />
                                                <span>S</span>
                                            </label>
                                            <label className="radio border border-secondary border-5 px-2 py-1">
                                                <input type="radio" name="size" className='mx-2' value="S" />
                                                <span>M</span>
                                            </label>
                                            <label className="radio border border-secondary border-5 px-2 py-1">
                                                <input type="radio" name="size" className='mx-2' value="S" />
                                                <span>L</span>
                                            </label>
                                        </div> */}
                                        <Quantity qty={qty} setDecrement={setDecrement} setIncrement={setIncrement} />

                                        <div className="cart mt-4 align-items-center">
                                            <button className="btn btn-block fs-5 fw-bold mb-4"
                                                onClick={() => {
                                                    const { _id, image, price, title } = productDetails;
                                                    dispatch(addToCart({ _id, image, price, title,productDetails }));
                                                    history("/cart");
                                                }}
                                                style={{ backgroundColor: "#bfa9ac", }}
                                            >ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SingleProductIndexComponent