import React from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CategoryBar from './CategoryBar';
function ProductIndexComponent() {
    const allProduct = useSelector((state) => state.product)
    const { products, loading } = allProduct
    if (loading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>
            <div className='row m-2'>
                <CategoryBar />
                <div className='row mt-2'>
                    {
                        products.map((items, index) =>
                            <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center' key={index}>
                                <Link to={`/${items.slug}/${items._id}`}>
                                    <div className="card " style={{ width: "18rem" }}>
                                        <div className='m-3'>
                                            <img className="card-img-top" src={`http://localhost:8000/public/${items.featuredImg}`} width={200} height={300} alt={items.name} />
                                        </div>
                                        <div className="card-body text-dark" >
                                            <h6 className="card-title " style={{ maxHeight: 132 }}>{items.name}</h6>
                                            {/* <p class="card-text">{items.description}</p> */}
                                            <p className="card-title fs-5"><PriceFormat price={items.price} /> </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProductIndexComponent

