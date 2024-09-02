import './App.css';
// import {HashRouter, Route, Routes} from "react-router-dom";
const {Route, Routes, BrowserRouter} = require('react-router-dom');
const {SetAPI} = require('./pages/SetAPI')
const {Play} = require('./pages/Play')

export default function App() {
  return (
    <div className="App">
        <div>
            {/*before router*/}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SetAPI />}/>
                <Route path="/play" element={<Play />}/>
              </Routes>
            </BrowserRouter>
            {/*after router*/}
            {/*<SetAPI />*/}
        </div>

    </div>
  );
}

