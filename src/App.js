import './App.css';
const {useEffect} = require("react");
// import {HashRouter, Route, Routes} from "react-router-dom";
const {Route, Routes, BrowserRouter} = require('react-router-dom');
const {SetAPI} = require('./pages/SetAPI')
const {Play} = require('./pages/Play')

export default function App() {
    useEffect(() => {
        window.Telegram.WebApp.ready()
    }, []);

  return (
    <div className="App">
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SetAPI />}/>
                <Route path="/play" element={<Play />}/>
              </Routes>
            </BrowserRouter>
        </div>

    </div>
  );
}

