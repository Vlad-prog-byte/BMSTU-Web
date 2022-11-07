import React from "react";
import './Channels.css';

const Channel = (props) => {
    return(
      <div className="channel">
          <img className="picture" src={props.src} alt="Проблемы с БД"/>
          {props.name}
      </div>
    );
}


const Channels = (props) => {
    console.log(props.info)
    let channels = props.info.map((data) => <Channel src={data.src} name={data.name} />);
    return(
        <div className="channels">
            {channels}
        </div>
    );
}

export default Channels;