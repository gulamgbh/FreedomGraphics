import React from 'react'
import { BsGrid1X2, BsListCheck } from 'react-icons/bs';
import { InputComponents } from '../global-components/Form.components';

const Filtertopbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div className='m-2'>
                <BsGrid1X2 size={21} className='mx-2' />
                <BsListCheck size={21} className='mx-2' />
            </div>

            <form onSubmit={(e)=>e.preventDefault()}>
                {/* <div class="form-group" >
                    <InputComponents onChange={searchValueData} typ="search" cn="form-control" aria-describedby="emailHelp" plh="Search"/>
                </div> */}
            </form>
        </nav>
    )
}

export default Filtertopbar