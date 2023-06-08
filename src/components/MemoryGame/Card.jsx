import {Component} from "react";
import MemoryGameCard from "../../classes/MemoryGameCard";

class Card extends Component{
	render() {
		let className = "memory-game-card bd-gray";
		let card: MemoryGameCard = this.props.card;
		let imageSrc: string = card.isShowing ? card.imageSrc : "card-back.svg";
		let action;

		if (!card.isShowing){
			action = this.props.action;
			className += " cursor-pointer"
		}

		return (
			<div className={className} onClick={action}>
				<img alt="memory-game-card" src={require("../../assets/images/cards-images/" + imageSrc)}/>
			</div>
		)
	}
}

export default Card;