import React from 'react';
import {Col, Card, Image} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
const PublicCollection = ({collection}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-2" onClick={() => navigate('/collection' + '/' + collection.id)}>
            <Card style={{width: 250, cursor: 'pointer'}} border={"dark"}>
                <Image width={250} height={250} src={collection.img}/>
                <div>
                    <div className="d-flex justify-content-center mt-1">
                        <h3>{collection.name}</h3>
                    </div>
                    <div className="d-flex m-1 justify-content-center text-black-50">
                        Topic: {collection.topic}
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default PublicCollection;