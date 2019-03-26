
/** A single segment of a game stage. A segment can be a tutorial section,
 * timed segment, kill counts, etc.
 */
 export default class LevelChapter {

    /**
     * @param {Component} component The react component to mount while this chapter is showing.
     */
    constructor(component) {
        this.component = component;
        this.complete = false;

        this.init = false;
    }

    start(stage) {

        this.init = true;
        if (this.component)
            stage.addTutorialComponent(this.component);

    }

    update(stage, ctx) {

        if (!this.init) {
            this.start(stage);
            return;
        }
        console.log('lol im updating k')

    }

    complete(stage) {
        this.complete = true;
    }

}