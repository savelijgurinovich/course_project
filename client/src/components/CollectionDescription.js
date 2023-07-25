import React, {useContext} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

const CollectionDescription = ({userCollection}) => {

    return (
            <Card style={{cursor: 'pointer'}} border={"dark"} className="mt-2">
                <div>
                    <h2 className="d-flex justify-content-center mt-2"> Description: </h2>
                    <div className="d-flex m-1 justify-content-center">
                       {userCollection.description}
                    </div>
                </div>
            </Card>
    )
}

export default CollectionDescription;