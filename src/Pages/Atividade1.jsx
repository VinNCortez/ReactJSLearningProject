import {Component} from "react";
import Clock from "../components/Clock";
import Label from "../components/Label";
import Header from "../components/Header";


export class Atividade1 extends Component {
	render() {
		return (
			<>
				<Header/>
				<Clock/>
				<Label text="Venha estudar na Fatec!"/>
			</>
		)
	}
}

export default Atividade1;