import {Component} from "react";

export class CalculatorButton extends Component {
	render() {
		let buttonClasses = "calculator-button btn circle big " + this.props.buttonClasses;

		if (!this.props.children) {
			let iconClasses = "icon " + this.props.iconClasses;
			return (
				<button onClick={this.props.operation} style={this.props.style} className={buttonClasses}>
					<i className={iconClasses}></i>
				</button>
			)
		}
		else {
			return (
				<button onClick={this.props.operation} style={this.props.style} className={buttonClasses}>
					<span className="icon-text w-auto" >{this.props.children} </span>
				</button>
			)
		}

	}
}