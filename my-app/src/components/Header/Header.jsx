import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <div className="mytubeHeader">

            <div className="logo">
                <img  className="logoPicture" src="https://mir-s3-cdn-cf.behance.net/projects/max_808/73baf370508287.Y3JvcCw4NDIsNjU5LDgxLDEyNQ.jpg" alt="Проблема с БД"/>
            </div>

            <div className="search">
                    <textarea className="searchArea">Поиск</textarea>
                    <button><img className="searchPicture" src="https://psh.cattus2.ru/img/find.jpg" alt="Проблема с БД"/></button>
            </div>

            <div className="authorization">
                    <a href="#s" ><img className="picture" src="https://avatars.mds.yandex.net/i?id=01aa2ce658fb3f27840990c6a9e90807-5480941-images-thumbs&n=13" alt="Проблемы с БД"/></a>
            </div>
        </div>
    );
}


export default Header;