import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RightPanelViewCat = () => {
    const category = useSelector(state => state.category);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li className='text-white' key={category._id}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
                // {
                //   label: category.name,
                //   value: category._id,
                //   children: category.children.length > 0 && renderCategories(category.children)
                // }
            )
        }
        return myCategories;
    }
    return (
        <div className='row'>
            <div className='col-md-12 col-xxl-12'>
                <ul>
                    {renderCategories(category.categories)}
                </ul>
            </div>
        </div>
        

    )
}

export default RightPanelViewCat