export default {

	/** Given a canvas DOM element and a rect, converts the rect's coordinates to the
	 *  local space of the canvas. This is useful if you have an element's coordinates
	 * on the DOM, but you want to render something in the canvas on top of that element.
	 */
	domToCanvasCoords: (canvasElement, inputRect) => {
		const canvasRect = canvasElement.getBoundingClientRect();
		return {
			x: inputRect.x - canvasRect.x,
			y: inputRect.y - canvasRect.y,
			left: inputRect.left - canvasRect.left,
			right: inputRect.right - canvasRect.left,
			top: inputRect.top - canvasRect.top,
			bottom: inputRect.bottom - canvasRect.top,
			width: inputRect.width,
			height: inputRect.height,
		}
	}
}