import React from 'react';
import './BodyContainer.css'
import Footer from '../../Footer/Footer'

/** This is the container for putting the body of a page into.
 * It rests under the header, and has the correct padding / margins.
 */
const BodyContainer = (props) => (
	<div className="body-container">
		{props.children}
		<Footer />
	</div>
);

export default BodyContainer;
