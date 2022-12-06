import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Row} from "react-bootstrap";
import {ContextApp} from "../../App";
import axios from "axios";



// <div>
//     <a href={props.href}>{props.name_video}</a>
//     <p>{props.title}</p>
//     <p>Лайки: {props.likes} &#160; &#160; Дизлайки: {props.dislikes}</p>
// </div>

const Video = (props) => {
    const deletelike = (event) => {
        if (props.state.id != -1) {
            axios.post('http://127.0.0.1:8000/api/likeDislike/delete', {
                'userLike' : 9,
                'video' : props.data.id
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            alert('Откащано в доступе');
        }
    }

    const like = (event) =>{
        let postData
        if (event.target.innerText == 'Лайки')
            postData = {
                "dislikes": 0,
                "likes": 1,
                "userLike": 9,
                "video": props.data.id
            }
        else if (event.target.innerText == 'Дизлайки')
            postData = {
                "dislikes": 1,
                "likes": 0,
                "userLike": 9,
                "video": props.data.id
            }
        if (props.state.id != -1) {
                console.log(event.target.innerText);
                axios.post('http://127.0.0.1:8000/api/likeDislike', postData)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
        else
        {
            alert('Откащано в доступе');
        }

    }

    return(
                <Card className="card">
                    <Card.Body>
                        <Card.Text>{props.data.name_video}</Card.Text>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            <Button onClick={like}>Лайки</Button>
                            {props.data.likes} &#160; &#160;
                            <Button onClick={like}>Дизлайки</Button>
                            {props.data.dislikes}
                            &#160; &#160;
                            <Button onClick={deletelike}>Убрать оценку</Button>
                        </Card.Text>
                        <Button className="cardButton" href={props.data.href} target="_blank" variant="primary">Открыть Видео</Button>
                    </Card.Body>
                </Card>
    );
}

const Channel = () =>{
    const {state, dispatch} = useContext(ContextApp);
    let {id, nickname} = useParams();
    console.log(`http://127.0.0.1:8000/api/user/${id}`);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/channel/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    });
    console.log(items);
    let videos = items.map((data) => <Video {...{data, state}}/>);
    console.log(videos);
    return(
        <div>
            <p className="Br_p"><Link className="Br_Link" to="/">Главная</Link>/ <Link className="Br_Link" to="/channels">Каналы</Link>/{nickname}</p>
            {videos}
        </div>
    );
}
export default Channel;