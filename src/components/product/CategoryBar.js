import React from 'react'
import { catData } from './data'

function CategoryBar() {

    return (
        <nav class="navbar navbar-light bg-light mt-1 d-flex justify-content-evenly">
            {
                catData.map((items) => 
                    <div >
                        <img src={items.url} height={64} width={64}/>
                        <p className='text-center fw-bold'>{items.text}</p>
                    </div>
                )
            }

        </nav>
    )
}

export default CategoryBar