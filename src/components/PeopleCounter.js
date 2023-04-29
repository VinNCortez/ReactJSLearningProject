import React from "react";
import CounterBox from "./CounterBox/CounterBox";
import ManImage from "../images/man.svg";
import WomanImage from "../images/woman.svg";
import "../css/PeopleCounter.css"

class PeopleCounter extends React.Component{


    constructor(props) {
        super(props);
        this.manCounterRef = React.createRef();
        this.womanCounterRef = React.createRef();
        this.totalCounterRef = React.createRef();
    }

    getTotalCount(){

    }

    render() {
        return (
            <div className="people-counter-container">
                <i className="icon icon-refresh cursor-pointer reset-button"></i>
                <div className="people-counter-total">
                    <CounterBox ref={this.totalCounterRef} headerText="Total"/>
                </div>
                <div className="people-counter">
                    <CounterBox ref={this.manCounterRef} headerText="Homens" counterActions imageSrc={ManImage}/>
                    <CounterBox ref={this.womanCounterRef} headerText="Mulheres" counterActions imageSrc={WomanImage}/>
                </div>
            </div>
        );
    }
}

export default PeopleCounter;