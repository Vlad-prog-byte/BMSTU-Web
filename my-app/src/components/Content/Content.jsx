import React, {useContext, useEffect} from "react";
import './Content.css'
import {ContextApp} from "../../App";
import {Button, Card, Row} from "react-bootstrap";

// <Card className="card">
//     <Card.Img className="cardImage" variant="top" src={artworkUrl100} height={100} width={100}  />
//     <Card.Body>
//         <div className="textStyle">
//             <Card.Title>{artistName}</Card.Title>
//         </div>
//         <div  className="textStyle">
//             <Card.Text>
//                 {collectionCensoredName}
//             </Card.Text>
//         </div>
//         <Button className="cardButton" href={trackViewUrl} target="_blank" variant="primary">Открыть в ITunes</Button>
//     </Card.Body>
// </Card>


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


{/*// <div>*/}
{/*//     <a href={props.href}>{props.name_video}</a>*/}
{/*//     <p>{props.title}</p>*/}
{/*// </div>*/}



const Content = () => {
        const {state, dispatch} = useContext(ContextApp);
        console.log(state)
        let videos
        if (state.search !== undefined)
                 videos = state.search.map((data) => <Videos {...data}/>);
        return(
        <div>
                {videos}
        </div>
    );
}


export default Content;