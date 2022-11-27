// import './App.css';
import Navbars from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channels from "./components/Channels/Channels";
import Channel from "./components/Channel/Channel";





function App(props) {
   return (
      <BrowserRouter basename="/">
          <div className="myTube">
              {/*<Header/>*/}
              <Navbars/>
              <Routes>
                  <Route path="/channels/:id/:nickname" element={<Channel/>} />
                  <Route path="/channels" element=  {<Channels info={props.data}/>}  />
                  <Route path="/" element={<Content/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;