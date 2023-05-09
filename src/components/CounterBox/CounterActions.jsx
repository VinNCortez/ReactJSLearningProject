import {Component} from "react";

class CounterActions extends Component{
    render() {
        return (
            <div className="counter-actions">
                <button className="cursor-pointer circle green" onClick={this.props.increment}><i className="icon icon-plus"></i></button>
                <button className="cursor-pointer circle small red" onClick={this.props.decrement}><i className="icon icon-minus small"></i></button>
            </div>
        );
    }
}

export default CounterActions;