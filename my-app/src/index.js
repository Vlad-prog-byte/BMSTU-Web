import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dataChannels =[
    {
        src : "https://avatars.mds.yandex.net/i?id=2a149ae5bc0d25fc628264f6b13acea542af0bc2-5233195-images-thumbs&n=13",
        name : "Worlds"
    },
    {
        src : "https://cdn3.virtualsheetmusic.com/images/first_pages/HL/HL-46682First_BIG.png",
        name : "Musics"
    },
    {
        src : "https://avatars.mds.yandex.net/i?id=6b8e1f89ee0a8142ac9616e7cc2c35d6-2856463-images-thumbs&n=13",
        name : "Memes"
    },
    {
        src : "https://avatars.mds.yandex.net/i?id=750c1157daacedd02adacc82a4ff67c21ee1f020-4550834-images-thumbs&n=13",
        name : "Sport Cars"
    },
    {
        src : "https://avatars.mds.yandex.net/i?id=ace13ca9059aa118dd1a4f4345085fd904c8c7b6-7011592-images-thumbs&n=13",
        name : "It technology"
    }
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={dataChannels}/>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

reportWebVitals();
