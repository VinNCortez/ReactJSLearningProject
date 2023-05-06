import React from "react";
import "../css/Clock.css"

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {clockValue: new Date()};
  }

  tick(){
    this.setState({clockValue: new Date()});
  }

  componentDidMount() {
    this.tickId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickId);
  }

  render() {
    let date = this.state.clockValue;
    return (
        <h1 className="digital-clock black font-red">{date.toLocaleTimeString()}</h1>
    );
  }
}

export default Clock;
