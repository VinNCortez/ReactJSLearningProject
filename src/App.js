import {Component} from "react";
import "./assets/css/Icons.css"
import "./assets/css/Colors.css"
import "./assets/css/Buttons.css"
import "./assets/css/Animations.css"


class App extends Component{
    render() {
        return (
            <div id="app">
                <a href="/"> Home </a>
                <a href="atividade1"> Atividade 1</a>
                <a href="atividade2"> Atividade 2</a>
                <a href="atividade5"> Atividade 5</a>
                <a href="atividade6"> Atividade 6</a>
            </div>
        );
    }
}

export default App;