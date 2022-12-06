import React, {useContext} from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContextApp} from "../../App";
import {Button} from "react-bootstrap";

const Navbars = () => {
    const {state, dispatch} = useContext(ContextApp);
    async function getData(event){
        event.preventDefault();
        let searchInput = document.querySelector('.search__input');
        let data = searchInput.value;
        searchInput.value = '';
        if (data != '')
            window.location.href=`http://localhost:3000/search/${data}`;
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
                        <Button onClick={() =>{
                                        dispatch({type : 'SWITCH_ID', payload : {}});
                                        console.log(state.id);}}>Смена
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


export default Navbars;