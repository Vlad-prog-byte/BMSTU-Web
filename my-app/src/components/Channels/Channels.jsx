import React, {useEffect, useState} from "react";
import './Channels.css';
import {BrowserRouter, Link, useParams} from "react-router-dom";

const Avatar = (props) => {
    return(
      <div className="channel">
          <Link to={`${props.id}/${props.nickname}`}>
              <img className="picture" src={props.src} alt="Проблемы с БД"/>
            {props.nickname}
          </Link>
      </div>
    );
}


const Channels = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users")
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
    }, [])
    console.log(items);
    let channels = items.map((data) => <Avatar src={data.photo} nickname={data.nickname} id={data.pk}/>);
    return(
            <div className="channels">
                <p className="Br_p"><Link className="Br_Link" to="/">Главная</Link>/ Каналы</p>
                <h1>Каналы</h1>
                {channels}
            </div>
    );
}

export default Channels;