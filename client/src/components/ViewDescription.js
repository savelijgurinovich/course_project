import React, {useContext} from 'react';
import UserCollection from "./UserCollection";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import CollectionDescription from "./CollectionDescription";
import {observer} from "mobx-react-lite";

const ViewDescription = observer( () => {
    const {collection} = useContext(Context)
    const currentCollection = 1
    const userCollection =  collection.collections.filter((obj) => Object.values(obj).some((userId) => userId === currentCollection));
    return (
        <Row className="d-flex">
            {userCollection.map(userCollection =>
                <CollectionDescription key={userCollection.id} userCollection={userCollection}/>)}
        </Row>
    );
}
)
export default ViewDescription;