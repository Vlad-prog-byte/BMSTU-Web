import React, {useContext, useEffect, useState} from "react";
import './Channels.css';
import {BrowserRouter, Link, useParams} from "react-router-dom";
import {ContextApp} from "../../App";
import {Button, Card, Row} from "react-bootstrap";


const Avatar = (props) => {
    return(
        <Row xs={4} md={4} className="g-4" height={100} width={100}>
            <Link to={`${props.id}/${props.nickname}`}>
            <Card className="card">
                <Card.Img className="cardImage" variant="top" src={props.src} height={150} width={100}  />
                <Card.Body>
                    <Button className="cardButton" href={`${props.id}/${props.nickname}`} target="_blank" variant="primary">{props.nickname} </Button>
                </Card.Body>
            </Card>
            </Link>
        </Row>
    );
}


const Channels = (props) => {
    const {state, dispatch} = useContext(ContextApp);
    console.log(state.items);
    let channels = state.items.map((data) => <Avatar src={data.photo} nickname={data.nickname} id={data.pk}/>);
    return(
            <div className="channels">
                <p className="Br_p"><Link className="Br_Link" to="/">Главная</Link>/ Каналы</p>
                <h1>Каналы</h1>
                {channels}
            </div>
    );
}

export default Channels;