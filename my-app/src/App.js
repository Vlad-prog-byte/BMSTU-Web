// import './App.css';
import Navbars from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channels from "./components/Channels/Channels";
import Channel from "./components/Channel/Channel";
import {createContext, useEffect, useReducer} from "react";


export const ContextApp = createContext('default');

const initialState = {
    isLoaded: false,
    error : '',
    items : []
}

const reducer = (state, action) => {
    switch (action.type){
        case 'FETCH_SUCCESS':
            return {
                isLoaded: true,
                items : action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                isLoaded: true,
                items: [],
                error: action.error
            }
    }
}



function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: 'FETCH_SUCCESS', payload: result})
                },
                (error) => {
                    dispatch({type: 'FETCH_ERROR', error: error})
                }
            )
    }, [])

    return (
      <BrowserRouter basename="/">
          <div className="myTube">
              {/*<Header/>*/}
              <Navbars/>
              <Routes>
                  <Route path="/channels/:id/:nickname" element={<Channel/>} />
                  {/*<Route path="/channels" element=  {<Channels/>}  />*/}
                  <Route path="/" element={<Content/>}/>
                  <Route path="/channels" element={<ContextApp.Provider value={{dispatch, state}}>
                          <Channels/>
                      </ContextApp.Provider>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;