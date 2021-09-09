import React, { useContext} from "react";
import Items from './Items'
import { ItemsContext } from "./Components/ItemsContext";

const ItemsList = () => {
    
    const [items, setItems] = useContext(ItemsContext);
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
