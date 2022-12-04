import React, {useContext, useEffect, useState} from "react";
import './Channels.css';
import {BrowserRouter, Link, useParams} from "react-router-dom";
import {ContextApp} from "../../App";

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