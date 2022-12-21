import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {ContextApp} from "../../App";
import {Button, Card} from "react-bootstrap";


const Videos = (props) => {
    return(
        // <Row xs={4} md={4} className="g-4">
        <Card className="card">
            <Card.Body>
                <div className="textStyle">
                    <Card.Title>{props.name_video}</Card.Title>
                </div>
                <div  className="textStyle">
                    <Card.Text>
                        {props.title}
                    </Card.Text>
                </div>
                <Button className="cardButton" href={props.href} target="_blank" variant="primary">Открыть Видео</Button>
            </Card.Body>
        </Card>
        // </Row>
    );
}

const Search = ()=>{
    let {search} = useParams();
    const {state, dispatch} = useContext(ContextApp);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/search?search=${search}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("search")
                    dispatch({type: 'Search', payload: result});
                },
                (error) => {
                    console.log('error');
                }
            )
    }, []);

    let videos;
    if (state.search !== undefined)
        videos = state.search.map((data) => <Videos {...data}/>);
    return(
        <div>
            {videos}
        </div>
    );
}


export default Search;