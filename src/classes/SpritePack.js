/**
 * Sprite has an image source, and coordinates that it is on the image. This lets us have one
 * image with multiple sprites on it, by defining where on the image this sprite is from.
 * Sprite also includes a render method, which allows you to render it to an html canvas.
 */
class Sprite {

	/**
	 * @param {string} imgSource path to the image source
	 * @param {number} x position of the sprite on the image source.
	 * @param {number} y position of the sprite on the image source.
	 * @param {number} w Width of the sprite on the image source
	 * @param {number} h Height of the sprite on the image source
	 */
	constructor(imgSource, x, y, w, h) {
		this.image = new Image();
		this.image.src = imgSource;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	/**
	 * Renders this sprite on to the canvas
	 * @param {Canvas.Context} ctx canvas drawing context
	 * @param {*} coordsOnCanvas {x:number, y:number}
	 * @param {*} sizeOnCanvas {w:number, h:number}
	 */
	render(ctx, coordsOnCanvas, sizeOnCanvas) {

		ctx.drawImage(
			this.image,
			this.x,
			this.y,
			this.w,
			this.h,
			coordsOnCanvas.x,
			coordsOnCanvas.y,
			sizeOnCanvas.w,
			sizeOnCanvas.h
		);
	};
}

class SpriteAnimation {

	/**
	 * @param {Array} spriteArray An array of Sprites
	 * @param {Number} framesPerSprite Frames per second each sprite will show
	 * @param {boolean} loop Loop the animation?
	 */
	constructor(spriteArray, framesPerSprite, loop=true, frameOffset=0) {
		this.spriteArray = spriteArray;
		this.framesPerSprite = framesPerSprite;
		this.loop = loop;
		this.frame = frameOffset;
		this.spriteIndex = 0;
	}


	/**Updates the sprite animation. This should be called every frame. */
	render = (ctx, coordsOnCanvas, sizeOnCanvas) => {

		this.frame++;
		if (this.frame >= this.framesPerSprite) {

			this.frame = 0;

			// Iterate through the sprites of the animation
			this.spriteIndex++;
			if (this.spriteIndex >= this.spriteArray.length) {
				this.spriteIndex = 0;
			}	
		}

		this.spriteArray[this.spriteIndex].render(ctx, coordsOnCanvas, sizeOnCanvas);
	}
}

export { Sprite, SpriteAnimation}