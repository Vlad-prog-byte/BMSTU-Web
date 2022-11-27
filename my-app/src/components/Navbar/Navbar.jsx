import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
    return(
        <div className="mytubeNavbar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">MyTube</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/channels">Каналы</Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


export default Navbars;