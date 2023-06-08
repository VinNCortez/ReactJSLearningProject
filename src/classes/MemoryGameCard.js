class MemoryGameCard{
    imageSrc: string;
    twin: MemoryGameCard;
    isShowing: boolean = false;

    constructor(imageSrc: string) {
        this.imageSrc = imageSrc;
    }

    getTwin(): MemoryGameCard{
        this.twin = new MemoryGameCard(this.imageSrc);
        this.twin.twin = this;
        return this.twin;
    }

    show(): void{
        this.isShowing = true;
    }

    verifyTwin(): boolean{
        return this.isShowing === this.twin.isShowing;
    }

    hideBoth(): void{
        this.isShowing = this.twin.isShowing = false;
    }
}

export default MemoryGameCard;