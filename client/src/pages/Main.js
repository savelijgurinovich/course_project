import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import PublicCollectionList from "../components/PublicCollectionList";

const Main = () => {
    return (
        <div>

        <Container>
            <Row className="mt-3">
                <Col md={12}>
                    <PublicCollectionList/>
                </Col>
            </Row>

        </Container>
        </div>
    );
};

export default Main;