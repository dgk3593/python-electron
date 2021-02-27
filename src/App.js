import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
    // @ts-ignore
    const { ipcRenderer } = window;

    useEffect(() => {
        ipcRenderer.on("MESSAGE_FROM_BACKGROUND_VIA_MAIN", (event, message) => {
            console.log(message);
        });

        ipcRenderer.send("START_BACKGROUND_VIA_MAIN", {
            number: 25,
        });
    }, [ipcRenderer]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
