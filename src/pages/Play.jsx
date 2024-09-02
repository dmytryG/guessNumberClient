import React, {useState} from "react";
import GuessNumberService from "../services/guessNumber.service";
import {numberState} from "../config/numberState";

export function Play() {
    const [haveStarted, setHaveStarted] = useState(false)
    const [guess, setGuess] = useState(0)
    const [isBusy, setIsBusy] = useState(false)
    const [status, setStatus] = useState('')
    const uid = window.Telegram.WebApp.initDataUnsafe.user.id

    return (
        <div className={"modal-container modal-container-disable-background"}>
            <div className={"modal-child"}>
                <div className={"modal-header"}>
                    <h1>Guess the number</h1>
                </div>
                <div className={"modal-content"}>
                    {
                        haveStarted ?
                            <div className={"list"}>
                                <p>Please, input your guess here</p>
                                <input value={guess} onChange={(e) => {setGuess(Number(e.target.value))}} />
                                <button disabled={isBusy} className={"full-width"} onClick={async () => {
                                    setIsBusy(true)
                                    const result = await GuessNumberService.guess(guess, uid)
                                    setIsBusy(false)
                                    setHaveStarted(true)
                                    if (result === numberState.GUESSED) {
                                        setHaveStarted(false)
                                        setStatus("You have guessed! 🎉🎉🎉")
                                    } else if (result === numberState.HIGHER) {
                                        setStatus("We need to go HIGHER 🔼")
                                    } else if (result === numberState.LOWER) {
                                        setStatus("We need to go LOWER 🔽")
                                    } else {
                                        setStatus("Something really messed up 🤔")
                                    }
                                }}>Guess</button>
                            </div>

                            : <button disabled={isBusy} className={"full-width"} onClick={async () => {
                                setIsBusy(true)
                                await GuessNumberService.start(uid)
                                setIsBusy(false)
                                setHaveStarted(true)
                            }}>Start</button>
                    }
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );
}