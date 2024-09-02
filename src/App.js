import './App.css';
// import {HashRouter, Route, Routes} from "react-router-dom";
// import {Route, Routes, HashRouter} from 'react-router-dom';
// import Play from "./pages/Play";
const {SetAPI} = require('./pages/SetAPI')
const {Play} = require('./pages/Play')

export default function App() {
  return (
    <div className="App">
      before router
    {/*<HashRouter>*/}
    {/*  <Routes>*/}
    {/*    <Route path="/" element={<SetAPI />}/>*/}
    {/*    <Route path="/play" element={<Play />}/>*/}
    {/*  </Routes>*/}
    {/*</HashRouter>*/}
      after router
      <SetAPI />
    </div>
  );
}

