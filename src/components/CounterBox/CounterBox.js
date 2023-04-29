import React from "react";
import "../../css/Counter.css"
import CounterActions from "./CounterActions";
import CounterImage from "./CounterImage";

class CounterBox extends React.Component{
    state = {count: 0};

    get count(){
        console.log(this.props.ref);
        return this.state.count;
    }

    increment(){
        this.setState({count: this.count + 1});
    }

    decrement(count: number){
        if (this.count > 0) {
            this.setState({count: this.count - 1});
        }
    }

    restart(){
        this.setState({count: 0})
    }

    render() {
        let counterActionsComponent;
        let counterImageComponent;

        if (this.props.counterActions) {
            counterActionsComponent = <CounterActions increment={ () => this.increment() } decrement={() => this.decrement()}/>;
        }

        if (this.props.imageSrc) {
            counterImageComponent = <CounterImage imageSrc={this.props.imageSrc}/>
        }

        return (
            <div className="counter-container">
                {counterImageComponent}
                {counterActionsComponent}
                <h4 className="counter-header">{this.props.headerText}</h4>
                <span className="counter">
                    {this.state.count}
                </span>
            </div>



        )
    }
}

export default CounterBox;