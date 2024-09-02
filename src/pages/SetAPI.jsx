import React, { useState } from 'react';
import {config} from "../config/cfg";
import {useNavigate} from "react-router-dom";

export function SetAPI() {
    const [url, setUrl] = useState('');
    // const navigate = useNavigate();

    return (
        <div className={"modal-container modal-container-disable-background"}>
            <div className={"modal-child"}>
                <div className={"modal-header"}>
                    <h1>Guess the number</h1>
                </div>
                <div className={"modal-content"}>
                    <p>Please, input API URL in order to continue</p>
                    <input value={url} onChange={(e) => {setUrl(e.target.value)}} />
                    <button className={"full-width"} onClick={(e) => {
                        e.preventDefault()
                        config.serverAddress = url
                        console.log('Saved API URL as', config.serverAddress);
                        // navigate("/play")
                    }}>Ok</button>
                </div>
            </div>
        </div>
    );
}