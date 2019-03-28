import calc from '../data/calc';


export default class TextRenderer {

	constructor(jiggle=true) {
		this.jiggle = jiggle;
		this.textOffsetFrames = 0;
		this.textOffset = {x: 0, y:0};
	}

	render(ctx, text, coordsOnCanvas, fontSize, color, align='center') {

		// make the text jiggle every few frames
		if (this.jiggle) {
			this.textOffsetFrames++;
			if (this.textOffsetFrames > calc.randomRange(7, 15)){
				this.textOffset = {
					x: calc.randomRange(-2, 2),
					y: calc.randomRange(-2, 2),
				};
				this.textOffsetFrames = 0;
			}
		}

		// render the text on the canvas
		ctx.font =  fontSize + 'px Raleway';
		ctx.textAlign = align;
		ctx.fillStyle = color;
		ctx.fillText(text, coordsOnCanvas.x + this.textOffset.x, coordsOnCanvas.y + this.textOffset.y);
	}
}