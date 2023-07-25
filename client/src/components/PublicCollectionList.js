import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PublicCollection from "./PublicCollection";
import {Row} from "react-bootstrap";
const PublicCollectionList = observer(() => {
    const {collection} = useContext(Context)
    return (
        <Row className="d-flex">
            {collection.collections.map(collection =>
           <PublicCollection key={collection.id} collection={collection}/>)}
        </Row>
    );
});

export default PublicCollectionList;