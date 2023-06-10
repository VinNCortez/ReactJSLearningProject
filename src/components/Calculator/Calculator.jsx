import {Component} from "react";
import "../../assets/css/Calculator.css"
import {CalculatorButton} from "./CalculatorButton";

class Calculator extends Component{
	state = {display: "0"};
	operationChar: string = "";

	static getCorrectOperationCharacters(display: string): string{
		return display.replace("x", "*")
			.replace("÷", "/")
			.replaceAll(",", ".");
	}

	updateDisplay(value: string){
		this.setState({display: value.replaceAll(".", ",")});
	}

	addDigit(digit: string): void{
		if (this.state.display === "0")
			this.updateDisplay(digit);
		else
			this.updateDisplay(this.state.display + digit);
	}

	addDecimalChar(): void{
		this.setState({display: this.state.display + ","});
	}

	cancel(): void{
		let operationCharIndex = this.state.display.indexOf(this.operationChar);
		if (this.operationChar !== ""){
			let operationCharIndex = this.state.display.indexOf(this.operationChar);
			this.updateDisplay(this.state.display.slice(0, operationCharIndex));
			this.operationChar = "";
		}
		else
			this.updateDisplay("0");
	}

	startArithmeticOperation(operationChar: string): void{
		if (this.operationChar !== ""){
			let operation = this.state.display;
			if (operation.endsWith(this.operationChar)) {
				operation = operation.replace(this.operationChar, operationChar);
				this.updateDisplay(operation);
			}
			else{
				let result = eval(Calculator.getCorrectOperationCharacters(operation)).toString();
				this.updateDisplay(result + operationChar);
			}
			this.operationChar = operationChar;
		}
		else{
			this.updateDisplay(this.state.display + operationChar);
		}
		this.operationChar = operationChar;
	}

	result(): void{
		if(this.operationChar !== ""){
			let operation = Calculator.getCorrectOperationCharacters(this.state.display);
			this.updateDisplay(eval(operation).toString())
			this.operationChar = "";
		}
	}

	render() {
		return (
			<div className="calculator-container">
				<div className="calculator-display">{this.state.display}</div>
				<div className="calculator-buttons-container d-flex">
					<CalculatorButton operation={ () => this.cancel() } buttonClasses="light-gray"> AC </CalculatorButton>
					<CalculatorButton buttonClasses="light-gray" iconClasses="icon-plus-minus"/>
					<CalculatorButton buttonClasses="light-gray" iconClasses="icon-percent"/>
					<CalculatorButton operation={ () => this.startArithmeticOperation("÷") } buttonClasses="orange" iconClasses="icon-divide"/>
					<CalculatorButton operation={ () => this.addDigit("7") } buttonClasses="dark-gray"> 7 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("8") } buttonClasses="dark-gray"> 8 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("9") } buttonClasses="dark-gray"> 9 </CalculatorButton>
					<CalculatorButton operation={ () => this.startArithmeticOperation("x") } buttonClasses="orange" iconClasses="icon-xmark"/>
					<CalculatorButton operation={ () => this.addDigit("4") } buttonClasses="dark-gray"> 4 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("5") } buttonClasses="dark-gray"> 5 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("6") } buttonClasses="dark-gray"> 6 </CalculatorButton>
					<CalculatorButton operation={ () => this.startArithmeticOperation("-") } buttonClasses="orange" iconClasses="icon-minus"/>
					<CalculatorButton operation={ () => this.addDigit("1") } buttonClasses="dark-gray"> 1 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("2") } buttonClasses="dark-gray"> 2 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDigit("3") } buttonClasses="dark-gray"> 3 </CalculatorButton>
					<CalculatorButton operation={ () => this.startArithmeticOperation("+") } buttonClasses="orange" iconClasses="icon-plus"/>
					<CalculatorButton operation={ () => this.addDigit("0") } style={{width: 170, borderRadius: "40px"}} buttonClasses="dark-gray"> 0 </CalculatorButton>
					<CalculatorButton operation={ () => this.addDecimalChar() } buttonClasses="dark-gray"> , </CalculatorButton>
					<CalculatorButton operation={ () => this.result() } buttonClasses="orange" iconClasses="icon-equals"/>
				</div>
			</div>
		);
	}
}

export default Calculator;