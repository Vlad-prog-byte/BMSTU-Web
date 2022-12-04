import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {

    // let buttonSearch = document.querySelector('.search__button');
    // buttonSearch.addEventListener('click', getData);
    async function getData(event){
        event.preventDefault();
        let searchInput = document.querySelector('.search__input');
        data = searchInput.value;
        searchInput.value = '';
        const response =  await fetch(`http://127.0.0.1:8000/api/search?request=${data}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(res);
                },
                (error) => {
                    console.log('error');
                }
            )
    }


    return(
        <div className="mytubeNavbar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">MyTube</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/channels">Каналы</Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                        <form className="search">
                            <input type="text" placeholder="Искать здесь..." className="search__input"/>
                                <button type="submit" className="search__button" onClick={getData}>Поиск</button>
                        </form>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


export default Navbars;