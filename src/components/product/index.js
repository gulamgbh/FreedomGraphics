import React from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
function ProductIndexComponent() {
    const allProduct = useSelector((state) => state.product)

    const { products, isLoading } = allProduct
    if (isLoading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>
            <div className='row m-2'>
                {
                    products.map((items, index) =>
                        <div className='col-sm-4 col-md-4 col-lg-4 col-xl-2 ' key={index}>
                            <div className="card mb-3"  >
                                <Link to={`/single-product/${items._id}`}>
                                    <img src={items.image} className="card-img-top" height="300" alt="..." />
                                    <div className="card-body fw-bold">
                                        <p className="card-title " style={{ fontSize: 20, height: 90, overflow: "hidden" }}>{items.title}</p>
                                        <p className="card-title fs-5"><PriceFormat price={items.price} /> </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ProductIndexComponent

{/* <CategoryBar /> */ }
{/* <div className='row'> */ }
{/* <div className='col-md-2 col-lg-2'>
                    <Filtersidebar />
                </div> */}
{/* <div className='col-md-10 col-lg-10'> */ }
{/* <div className='row m-2'> */ }
{/* <Filtertopbar /> */ }
{/* </div> */ }