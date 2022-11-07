import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="mytubeNavbar">
            <div className="menu">
                <a className="href" href="/">Главный канал</a>
                <a className="href" href="/channels">Каналы</a>
                <a className="href" href="#s">Рекомендации</a>
                <a className="href"  href="#s">Подписки</a>
            </div>
        </div>
    );
}

export default Navbar;