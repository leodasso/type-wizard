import React from 'react';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
	<div>
		<Header>About TypeWizard</Header>
		<BodyContainer>
			<p>
				This about page is for anyone to read!
				</p>

			<p>
				keyboard image thanks to LukasMayer lukasmay.er https://www.pexels.com/@lmay
			</p>
		</BodyContainer>
	</div>
);

export default AboutPage;
