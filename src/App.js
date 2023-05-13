import {Component} from "react";
import "./assets/css/Icons.css"
import "./assets/css/Colors.css"
import "./assets/css/Buttons.css"


class App extends Component{
    render() {
        return (
            <div id="app">
                <a href={'/'}> Home </a>
                <a href={'atividade1'}> Atividade 1</a>
            </div>
        );
    }
}

export default App;