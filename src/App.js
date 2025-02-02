import React from "react";
import SendEmailView from "./views/email/SendEmailView";
import HomePage from "./views/dashboard";

function App() {
    return (
        <>
            <HomePage/>
            <span style={{display: 'none'}}>
                <SendEmailView/>
          </span>
        </>
    );
}

export default App;
