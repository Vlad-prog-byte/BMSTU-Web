import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


const Video = (props) => {
    return(
        <div>
          <a href={props.href}>{props.name_video}</a>
          <p>{props.title}</p>
          <p>Лайки: {props.likes} &#160; &#160; Дизлайки: {props.dislikes}</p>
        </div>
    );
}

const Channel = () =>{
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
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    console.log(items);
    let videos = items.map((data) => <Video {...data}/>);
    console.log(videos);
    return(
        <div>
            <p className="Br_p"><Link className="Br_Link" to="/">Главная</Link>/ <Link className="Br_Link" to="/channels">Каналы</Link>/{nickname}</p>
            {videos}
        </div>
    );
}

export default Channel;