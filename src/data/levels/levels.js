
// import levels
import level1 from './beginner.level';
import level2 from './keymonsIntro.level';

/**Levels array is an array of functions. That way, every time we call for this level,
 * it creates a new instance. This is to prevent the data from persisting between play
 * sessions.
 */
export default [

	// The tutorial level
	level1,

	// Introduction to monsters
	level2,
]

