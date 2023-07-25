import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import UserCollection from "./UserCollection";
const UserCollectionList = observer(() => {
    const {collection} = useContext(Context)
    const currentUser = 30
    const userCollection =  collection.collections.filter((obj) => Object.values(obj).some((userId) => userId === currentUser));
   console.log(userCollection)
    return (
        <Row className="d-flex">
            {userCollection.map(userCollection =>
                <UserCollection key={userCollection.id} userCollection={userCollection}/>)}
        </Row>
    );
});

export default UserCollectionList;