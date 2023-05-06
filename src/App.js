import React from "react";
import "./css/Icons.css"
import "./css/Colors.css"
import "./css/Buttons.css"
import Clock from "./components/Clock";
import PeopleCounter from "./components/PeopleCounter";


class App extends React.Component{
    render() {
        return (
            <div id="app">
                <div><Clock/></div>
                <div><PeopleCounter/></div>
            </div>
        );
    }
}

export default App;