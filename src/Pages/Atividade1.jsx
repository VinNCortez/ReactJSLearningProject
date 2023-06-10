import {Component} from "react";
import Clock from "../components/Clock";
import Label from "../components/Label";


export class Atividade1 extends Component {
	render() {
		return (
			<>
				<Clock/>
				<Label text="Venha estudar na Fatec!"/>
			</>
		)
	}
}

export default Atividade1;