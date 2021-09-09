import React, { useContext} from "react";
import Items from './Items'
import { ItemsContext } from './ItemsContext';

const ItemsList = () => {
    
    const{items} = useContext(ItemsContext);
    return (
        <div>
            {items.map((item) => {
                return (
                    <Items itemData={item} />
                );
            })}
        </div>
    )
};


export default ItemsList;
