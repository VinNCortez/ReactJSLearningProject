import {Component} from "react";
import Card from "./Card";
import MemoryGameCard from "../../classes/MemoryGameCard";
import "../../assets/css/MemoryGame.css"
import "../../assets/css/Buttons.css"
import ResetButton from "../ResetButton";

export class MemoryGame extends Component {
	constructor(props) {
		super(props);
		let cardsImageSrcArray = [
			"cplusplus.svg", "csharp.svg", "java.svg", "php.svg", "python.svg", "ruby.svg"
		];
		let cardsArray: Array<MemoryGameCard> = [];

		cardsImageSrcArray.forEach((imageSrc) => {
			let card = new MemoryGameCard(imageSrc);
			let cardTwin = card.getTwin();
			cardsArray.push(card, cardTwin);
		});

		MemoryGame.shuffleCards(cardsArray);
		this.state = {cardsArray: cardsArray, isAttempt: false};
	}

	isAllCardsShowing(): boolean{
		return !this.state.cardsArray.some((card: MemoryGameCard) => !card.isShowing);
	}

	hideAll(){
		let cardsArray = this.state.cardsArray;
		cardsArray.forEach((card: MemoryGameCard) => card.isShowing = false);
		this.setState({
			cardsArray: cardsArray,
			isAttempt: false
		})
	}

	static shuffleCards(array: Array) {
		let currentIndex = array.length,  randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	}

	reset(): void{
		MemoryGame.shuffleCards(this.state.cardsArray);
		this.hideAll();
	}

	action(card: MemoryGameCard): void{
		let isAttempt: boolean;
		card.show();

		if (this.state.isAttempt && !card.verifyTwin())
				this.hideAll();
		else isAttempt = !(this.state.isAttempt && card.verifyTwin());

		this.setState({cardsArray: this.state.cardsArray, isAttempt: isAttempt});

		if (this.isAllCardsShowing())
			alert("Sucesso!");
	}

	render(): void {
		return (
			<div className="memory-game-container not-selectable">
				<div className="memory-game-buttons-container">
					<h1 className="title text-center position-relative">Jogo da Memória <ResetButton resetFunction={ () => this.reset() }/> </h1>
				</div>
				<div className="memory-game-cards-container">
					{
						this.state.cardsArray.map(
							(card: MemoryGameCard, index) => {
								return <Card key={index} card={card} action={ () => this.action(card) }/>
							})
					}
				</div>
			</div>
		)
	}
}