import {Component} from "react";
import CounterBox from "./CounterBox/CounterBox";
import ManImage from "../assets/images/man.svg";
import WomanImage from "../assets/images/woman.svg";
import "../assets/css/PeopleCounter.css"

class PeopleCounter extends Component{
    manCountName = "manCount";
    womenCountName = "womenCount";

    state = {manCount: 0, womenCount: 0};

    totalCount(){
        return this.count(this.manCountName) + this.count(this.womenCountName);
    }

    count(countName: string){
        return this.state[countName];
    }

    increment(countName: string){
        let state = {};
        state[countName] = this.state[countName] + 1;
        this.setState(state);
    }

    decrement(countName: string){
        let state = {};
        state[countName] = this.state[countName] - 1;
        if (this.state[countName] > 0) {
            this.setState(state);
        }
    }

    reset(){
        let state = {};
        state[this.manCountName] = 0;
        state[this.womenCountName] = 0;
        this.setState(state);
    }

    render() {

        return (
            <div className="people-counter-container position-relative">
                <i onClick={ () => this.reset()} className="icon icon-refresh cursor-pointer reset-button position-absolute"></i>
                <div className="people-counter-total">
                    <CounterBox countRef={() => this.totalCount() } headerText="Total"/>
                </div>
                <div className="people-counter">
                    <CounterBox incrementCallback={ () => this.increment(this.manCountName) }
                                decrementCallback={ () => this.decrement(this.manCountName) }
                                countRef={ () => this.count(this.manCountName) }
                                headerText="Homens"
                                counterActions
                                imageSrc={ManImage}/>

                    <CounterBox incrementCallback={ () => this.increment(this.womenCountName) }
                                decrementCallback={ () => this.decrement(this.womenCountName) }
                                countRef={ () => this.count(this.womenCountName) }
                                headerText="Mulheres"
                                counterActions
                                imageSrc={WomanImage}/>
                </div>
            </div>
        );
    }
}

export default PeopleCounter;