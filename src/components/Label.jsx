import {Component} from "react";
import calculator from "./Calculator/Calculator";

export class Label extends Component {
	state = {index: 0};
	text: string;

	constructor(props) {
		super(props);

		this.text = props.text;
	}

	updateIndex(): void {
		if (this.state.index === this.text.length)
			this.setState({index: 0});

		else this.setState({index: this.state.index + 1});
	}

	componentDidMount(): void {
		this.tickId = setInterval(() => this.updateIndex(), 100);
	}

	componentWillUnmount(): void {
		clearInterval(this.tickId);
	}

	render() {
		console.log(this.state.index);
		return <h2>{this.text.slice(0, this.state.index)}</h2> ;
	}
}

export default Label;