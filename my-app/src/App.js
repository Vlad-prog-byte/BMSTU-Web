// import './App.css';
import Navbars from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channels from "./components/Channels/Channels";
import Channel from "./components/Channel/Channel";
import {createContext, useEffect, useReducer} from "react";
import {Button} from "react-bootstrap";
import Search from "./components/Search/Search";


export const ContextApp = createContext('default');

const initialState = {
    isLoaded: false,
    error : '',
    items : [],
    search : [],
    id: -1,
    channel : []
}


const reducer = (state, action) => {
    switch (action.type){
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoaded: true,
                items : action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoaded: true,
                items: [],
                error: action.error
            }
        case 'Search':
            return {
                ...state,
                search : action.payload
            }
        case 'SWITCH_ID':
                return {
                    ...state,
                    id : state.id == -1 ? 9 : -1
                }
        case 'CHANNEL':
                return {
                    ...state,
                    channel: action.payload
                }
    }
}



function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        console.log('restart')
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


    let flag = false;
    function reaction() {
        flag = !flag;
        console.log(flag);
    }
    return (
        <ContextApp.Provider value={{dispatch, state}}>
              <BrowserRouter basename="/">
                  <div className="myTube">
                      <Navbars/>
                      <Routes>
                          <Route path="/search/:search" element={<Search/>}/>
                          <Route path="/channels/:id/:nickname" element={<Channel/>}/>
                          <Route path="/" element={ <Content/> }/>
                          <Route path="/channels" element={<Channels/>}/>
                          <Route path="/localUser/"></Route>
                      </Routes>
                  </div>
              </BrowserRouter>
        </ContextApp.Provider>
  );
}

export default App;