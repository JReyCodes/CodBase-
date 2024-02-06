import React from "react";
import Header from "./Header.jsx"
import User from "./User.jsx";
import Roster from "./Roster.jsx";
import Schedule from "./Schedule.jsx";

const App = () => {

    return (
        <div id="main-div">
            <Header/>
            <User/>
            <div id="second-layer">
                <Schedule/>
                <Roster/>
            </div>
        </div>
    )
}

export default App;