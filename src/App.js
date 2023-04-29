import React from "react";
import PeopleCounter from "./components/PeopleCounter";
import "./css/Icons.css"
import "./css/Colors.css"
import "./css/Buttons.css"


class App extends React.Component{
    render() {
        return (
            <div id="app">
                <PeopleCounter/>
            </div>
        );
    }
}

export default App;