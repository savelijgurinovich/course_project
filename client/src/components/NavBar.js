import React, {useContext} from 'react';
import {Context} from "../index";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {user.isAuth ?
                        <Nav className="me-auto my-2 my-lg-2" style={{ maxHeight: '100px', marginLeft: '10px' }} navbarScroll>
                        <Button variant={"outline-dark"} onClick={() => user.setIsAuth(false)}>LOGOUT</Button>
                        <Nav.Link href="/" style={{color: "black", marginLeft: '20px'}}>Home page</Nav.Link>
                        <Nav.Link href="/collection" style={{color: "black", marginLeft: '20px'}}>My collections</Nav.Link>
                        </Nav>
                        :
                        <Nav className="me-auto my-2 my-lg-2" style={{ maxHeight: '100px', marginLeft: '10px' }} navbarScroll>
                            <Button variant={"outline-dark"} onClick={() => user.setIsAuth(true)}>LOGIN/REGISTRATION</Button>
                            <Nav.Link href="/" style={{color: "black", marginLeft: '20px'}}>Home page</Nav.Link>
                        </Nav>
                    }
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;