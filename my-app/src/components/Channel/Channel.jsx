import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Row} from "react-bootstrap";
import {ContextApp} from "../../App";
import axios from "axios";


// const Video = (props) => {
//
//     const {state, dispatch} = useContext(ContextApp);
//
//     const deletelike = (event) => {
//         if (props.state.id != -1) {
//             axios.post('http://127.0.0.1:8000/api/likeDislike/delete', {
//                 'userLike' : 9,
//                 'video' : props.data.id
//             })
//                 .then(function (response) {
//                     console.log(response);
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//
//             fetch(`http://127.0.0.1:8000/api/channel/${props.id}`)
//                 .then(res => res.json())
//                 .then(
//                     (result) => {
//                         dispatch({type: 'CHANNEL', payload: result})
//                     },
//                     (error) => {
//                         console.log(error)
//                     }
//                 )
//             console.log("NEW STATE", state);
//         }
//         else {
//             alert('Откащано в доступе');
//         }
//     }
//
//     const like = (event) =>{
//         let postData
//         if (event.target.innerText == 'Лайки')
//             postData = {
//                 "dislikes": 0,
//                 "likes": 1,
//                 "userLike": 9,
//                 "video": props.data.id
//             }
//         else if (event.target.innerText == 'Дизлайки')
//             postData = {
//                 "dislikes": 1,
//                 "likes": 0,
//                 "userLike": 9,
//                 "video": props.data.id
//             }
//         if (props.state.id != -1) {
//                 console.log(event.target.innerText);
//                 axios.post('http://127.0.0.1:8000/api/likeDislike', postData)
//                     .then(function (response) {
//                         console.log(response);
//                     })
//                     .catch(function (error) {
//                         console.log(error);
//                     });
//
//                 fetch(`http://127.0.0.1:8000/api/channel/${props.id}`)
//                     .then(res => res.json())
//                     .then(
//                         (result) => {
//                             dispatch({type: 'CHANNEL', payload: result})
//                         },
//                         (error) => {
//                             console.log(error)
//                         }
//                     )
//                 console.log("NEW STATE", state);
//         }
//         else
//         {
//             alert('Откащано в доступе');
//         }
//
//
//     }
//
//     return(
//                 <Card className="card">
//                     <Card.Body>
//                         <Card.Text>{props.data.name_video}</Card.Text>
//                         <Card.Title>{props.data.title}</Card.Title>
//                         <Card.Text>
//                             <Button onClick={like}>Лайки</Button>
//                             {props.data.likes} &#160; &#160;
//                             <Button onClick={like}>Дизлайки</Button>
//                             {props.data.dislikes}
//                             &#160; &#160;
//                             <Button onClick={deletelike}>Убрать оценку</Button>
//                         </Card.Text>
//                         <Button className="cardButton" href={props.data.href} target="_blank" variant="primary">Открыть Видео</Button>
//                     </Card.Body>
//                 </Card>
//     );
// }

const Channel = () =>{
    const {state, dispatch} = useContext(ContextApp);
    let {id, nickname} = useParams();

    const Video =  (props) => {
        const deletelike = async (event) => {
            if (props.state.id != -1) {
                await axios.post('http://127.0.0.1:8000/api/likeDislike/delete', {
                    'userLike': 9,
                    'video': props.data.id
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                await fetch(`http://127.0.0.1:8000/api/channel/${props.id}`)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            dispatch({type: 'CHANNEL', payload: result})
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
            } else {
                alert('Откащано в доступе');
            }
        }

        const like = async (event) => {
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
                await axios.post('http://127.0.0.1:8000/api/likeDislike', postData)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                await fetch(`http://127.0.0.1:8000/api/channel/${props.id}`)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            dispatch({type: 'CHANNEL', payload: result})
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
            } else {
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

    useEffect(() => {
        console.log('channel')
        fetch(`http://127.0.0.1:8000/api/channel/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: 'CHANNEL', payload: result})
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])
    let videos = state.channel.map((data) => <Video {...{data, state, id}}/>);
    useEffect(()=>{
    })
    return(
        <div>
            <p className="Br_p"><Link className="Br_Link" to="/">Главная</Link>/ <Link className="Br_Link" to="/channels">Каналы</Link>/{nickname}</p>
            {videos}
        </div>
    );
}
export default Channel;