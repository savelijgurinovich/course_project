import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import UserCollection from "./UserCollection";
import Item from "./Item";

const ItemList = () => {
    const {item} = useContext(Context)
    const currentCollection = 1
    const collectionItems =  item.items.filter((obj) => Object.values(obj).some((collectionId) => collectionId === currentCollection));
    return (
        <Row className="d-flex">
            {collectionItems.map(collectionItem =>
                <Item key={collectionItem.id} item={collectionItem}/>)}
        </Row>
);
};

export default ItemList;