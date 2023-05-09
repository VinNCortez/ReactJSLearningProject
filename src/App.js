import {Component} from "react";
import "./assets/css/Icons.css"
import "./assets/css/Colors.css"
import "./assets/css/Buttons.css"
import Clock from "./components/Clock";
import PeopleCounter from "./components/PeopleCounter";


class App extends Component{
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