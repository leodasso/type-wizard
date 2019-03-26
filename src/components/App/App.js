import React, {Component} from 'react';
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import Stats from '../Stats/Stats';
import Play from '../Play/Play';
import Settings from '../Settings/Settings';
import Trainer from '../Trainer/Trainer';

import './App.css';

class App extends Component {
	componentDidMount () {
		this.props.dispatch({type: 'FETCH_USER'})
	}

	render() {
		return (
			<Router>
				<div className="main-container">
					<Nav />
					<div className="content">
					<Switch>
						
							{/* Visiting localhost:3000 will redirect to localhost:3000/dashboard */}
							<Redirect exact from="/" to="/play" />

							{/* Visiting localhost:3000/about will show the about page.
							This is a route anyone can see, no login necessary */}
							<Route
								exact
								path="/about"
								component={AboutPage}
							/>

							{/* For protected routes, the view could show one of several things on the same route.
							Visiting localhost:3000/home will show the UserPage if the user is logged in.
							If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
							Even though it seems like they are different pages, the user is always on localhost:3000/home */}
							<ProtectedRoute
								exact
								path="/play"
								component={Play}
							/>

							<ProtectedRoute
								exact
								path="/play/stage"
								component={Trainer}
							/>

							{/* This works the same as the other protected route, except that if the user is logged in,
							they will see the info page instead. */}
							<ProtectedRoute
								exact
								path="/stats"
								component={Stats}
							/>

							<ProtectedRoute
								exact
								path="/settings"
								component={Settings}
							/>

							{/* If none of the other routes matched, we will show a 404. */}
							<Route render={() => <h1>404</h1>} />
						
					</Switch>
					</div>
				</div>
			</Router>
	)}
}

export default connect()(App);
