import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';
import Session from '../Session/Session';
import Chart from 'chart.js';
import './Stats.css';

// Options for the chart.js chart
const options = {
	responsive: true,
	maintainAspectRatio: true,
	aspectRatio: 2.2,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			},
			gridLines: {
				color: '#502146',
			}
		}]
	},
}

Chart.defaults.global.elements.point.hitRadius = 2;
Chart.defaults.global.elements.point.pointStyle = 'rectRounded';
Chart.defaults.global.defaultFontFamily = `'Raleway', sans-serif`;


class Stats extends Component{

	// The canvas context used for drawing
	ctx;
	chart;

	componentDidMount() {

		// fetch the list of sessions
		this.props.dispatch({type: 'FETCH_SESSIONS'});
		this.ctx = this.refs.chart;

		this.chart = new Chart(this.ctx, {
			type: 'line',

			data: [{
				borderColor: ['rgb(255, 79, 187)'],
			}],

			options: options,
		});
	}

	componentWillUnmount() {
		this.chart && this.chart.destroy();
	}

	/** Refreshes the chart with the new sessions data. Data is 
	 * fetched from props.
	 */
	updateChartData = () => {
		
		// If the chart hasn't been generated yet, just stop here.
		if (!this.chart) return;

		const newData = {
			labels: [],
			datasets: [{
				pointHoverRadius: 20,
				pointBackgroundColor: '#502146',
				pointBorderColor: 'rgb(255, 79, 187)',
				label: 'Accuracy',
				showLine: true,
				sessionIds: [],
				data: [],
				borderColor: ['rgb(255, 79, 187)'],
				borderWidth: 2,
			}],

		}

		// accuracy dataset is the first dataset being rendered
		const accSet = newData.datasets[0];

		// Add a point for each session
		for (let i = 0; i < this.props.sessions.length; i++) {

			const session = this.props.sessions[i];
			newData.labels.push(i);
			accSet.data.push(session.accuracy);
			accSet.sessionIds.push(session.id);
		}

		// Update the chart with new data
		this.chart.data = newData;
		this.chart.update({
			duration: 400,
		});
	}

	// canvasClicked = event => {
	// 	const activePoints = this.chart.getElementsAtEvent(event);
	// 	console.log('clicked', activePoints);

	// 	// get the dataset of the clicked point
	// 	console.log(this.chart);
	// 	const dataset = this.chart.datasets[activePoints[0].datasetIndex];

	// 	console.log(dataset.label);
	// }

	render() {

		this.updateChartData();

		return (
			<div>
				<Header>Stats</Header>
				<BodyContainer>
					<h3>Statistics</h3>
					<canvas ref="chart" onClick={this.canvasClicked}/>
					{/* <div className="stats-list">
						{
							this.props.sessions.map(session => 
								<Session key={session.id} session={session}/>)
						}
					</div> */}
				</BodyContainer>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Stats);