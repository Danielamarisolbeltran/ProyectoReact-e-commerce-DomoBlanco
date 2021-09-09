import React from 'react'

const Items = ({ itemData}) => {
    return (
        <div>
            <p>
                Name:{itemData.name} - ${itemData.price}
            </p>     
        </div>
    )   
};

export default Items;