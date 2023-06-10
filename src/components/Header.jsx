import {Component} from "react";
import "../assets/css/Header.css"

class Header extends Component{
    render() {
        return (
            <header id="header">
                <a href="/"> Home </a>
                <a href="Atividade1"> Atividade 1</a>
                <a href="Atividade2"> Atividade 2</a>
                <a href="Atividade5"> Atividade 5</a>
                <a href="Atividade6"> Atividade 6</a>
            </header>
        );
    }
}

export default Header;