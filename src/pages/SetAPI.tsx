export default function SetAPI() {
    return (
            <div className={"modal-container modal-container-disable-background"}>
                <div className={"modal-child"}>
                    <div className={"modal-header"}>
                        <h1>Guess the number</h1>
                    </div>
                    <div className={"modal-content"}>
                        <p>Please, input API URL in order to continue</p>
                        <input/>
                        <button className={"full-width"}>Ok</button>
                    </div>
                </div>
            </div>
    );
}