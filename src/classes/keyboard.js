/** The keyboard is the data class which contains all the 
 * info needed to render a given keyboard set. An example of this would be
 * the English US QWERTY keyboard. It contains Row arrays, which themselves
 * contain the keys in order of that row. When constructing a Keyboard,
 * the KeyRows parameter of the constructor should be given an array of rows.
 * So something like [ [row1Key1, row1Key2 row2Key3], [row2Key1, row2Key2], etc ]
 */
export default class KeyboardData {

    constructor(keyRows) {
        this.keyRows = keyRows;
    }
}