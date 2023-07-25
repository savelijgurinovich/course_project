import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ItemContent = observer( () => {
    const {item} = useContext(Context)
    const items = Object.entries(item)
    console.log(items);
    return (
        <div>
            Item description
        </div>
    );
}
)
export default ItemContent;