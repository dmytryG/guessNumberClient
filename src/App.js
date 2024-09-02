import './App.css';
// import {Route, Routes, HashRouter} from 'react-router-dom';
import SetAPI from ".\\pages\\SetAPI";
// import Play from "./pages/Play";

export default function App() {
  return (
    <div className="App">
      <SetAPI />
    {/*<HashRouter>*/}
    {/*  <Routes>*/}
    {/*    <Route path="/" element={<SetAPI />}/>*/}
    {/*    <Route path="/play" element={<Play />}/>*/}
    {/*  </Routes>*/}
    {/*</HashRouter>*/}
    </div>
  );
}

