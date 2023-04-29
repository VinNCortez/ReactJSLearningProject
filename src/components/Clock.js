import React from "react";

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
        <h2>{date.toLocaleTimeString()}</h2>
    );
  }
}

export default Clock;
