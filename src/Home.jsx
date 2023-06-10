import {Component} from "react";
import Header from "./components/Header";
import "./assets/css/Home.css";
import Img from "./assets/images/programming.jpg";

class Home extends Component{
    render() {
        return (
            <>
                <Header/>
                <div id="home-content">
                    <img width="100%" height="100%" alt="Programming" src={Img}/>
                </div>
            </>
        );
    }
}

export default Home;