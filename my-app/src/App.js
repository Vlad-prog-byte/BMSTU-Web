import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channels from "./components/Channels/Channels";


function App(props) {
  return (
      <BrowserRouter basename="/">
          <div className="myTube">
              <Header/>
              <Navbar/>
              <Routes>
                  <Route path="/channels" element=  {<Channels info={props.data}/>}  />
                  <Route path="/" element={<Content/>}/>
              </Routes>
          </div>
      </BrowserRouter>



      // <div className="myTube">
      //   <Header/>
      //   <Navbar/>
      //   <Content/>
      // </div>
  );
}

export default App;


// <BrowserRouter basename="/" >
//         <Switch>
//             <Route exact path="/">
//                 <h1>Это наша стартовая страница</h1>
//             </Route>
//             <Route path="/new">
//                 <h1>Это наша страница с чем-то новеньким</h1>
//             </Route>
//         </Switch>
// </BrowserRouter>


// function App() {
//
//     return (
//         <BrowserRouter basename="/" >
//             <div>
//                 <ul>
//                     <li>
//                         <Link to="/">Старт</Link>
//                     </li>
//                     <li>
//                         <Link to="/new">Хочу на страницу с чем-то новеньким</Link>
//                     </li>
//                 </ul>
//                 <hr />
//                 <Switch>
//                     <Route exact path="/">
//                         <h1>Это наша стартовая страница</h1>
//                     </Route>
//                     <Route path="/new">
//                         <h1>Это наша страница с чем-то новеньким</h1>
//                     </Route>
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     );
// }
