import React from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import UserCollectionList from "../components/UserCollectionList";

const UserPage = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={12}>
                    <UserCollectionList/>
                </Col>
            </Row>

        </Container>
    );
};

export default UserPage;