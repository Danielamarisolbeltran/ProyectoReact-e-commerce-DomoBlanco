import React from 'react'

const Items = ({ itemData}) => {
    return (
        <div style={{ backgroundColor: 'lightcoral' }}>
            <p>Name:{itemData.name} - ${ itemData.price }</p>

            
        </div>
    )   
};

export default Items;