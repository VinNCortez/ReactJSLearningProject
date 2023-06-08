import {Component} from "react";

export class ResetButton extends Component {
	render() {
		return (
			<i onClick={this.props.resetFunction} className="icon icon-refresh cursor-pointer reset-button position-absolute"></i>
		)
	}
}

export default ResetButton;