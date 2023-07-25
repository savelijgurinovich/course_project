import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ItemList from "../components/ItemList";
import CollectionDescription from "../components/CollectionDescription";
import PublicCollection from "../components/PublicCollection";
import ViewDescription from "../components/ViewDescription";


const CollectionPage = () => {

    return (
        <Container>
            <Row>
                <ViewDescription/>
            </Row>

            <Row className="mt-3">
                <Col md={12}>
                    <ItemList/>
                </Col>
            </Row>

        </Container>
    );
}


export default CollectionPage;