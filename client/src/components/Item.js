import React from 'react';
import {Col, Card, Image} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
const Item = ({item}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-2" onClick={() => navigate('/item' + '/' + item.id)}>
            <Card style={{width: 250, cursor: 'pointer'}} border={"dark"}>
                <Image width={250} height={250} src={item.img}/>
                <div>
                    <div className="d-flex justify-content-center mt-1">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="d-flex m-1 justify-content-center text-black-50 ">
                        Tags: {item.tags}
                    </div>
                </div>
            </Card>
        </Col>
    )
};

export default Item;