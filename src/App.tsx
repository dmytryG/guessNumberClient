import {HashRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import SetAPI from "./pages/SetAPI";
import Play from "./pages/Play";


export function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SetAPI />}/>
            <Route path="/play" element={<Play />}/>
        </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
