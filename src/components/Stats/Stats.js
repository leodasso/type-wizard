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
	}
}

Chart.defaults.global.elements.point.hitRadius = 2;
Chart.defaults.global.elements.point.pointStyle = 'rectRounded';


class Stats extends Component{

	ctx;
	chart;

	componentDidMount() {
		// fetch the list of sessions
		this.props.dispatch({type: 'FETCH_SESSIONS'});
		this.ctx = this.refs.chart;

		this.chart = new Chart(this.ctx, {
			type: 'line',

			data: {},

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
				pointRadius: 2,

				pointBackgroundColor: 'rgb(255, 79, 187)',
				pointBorderColor: 'rgb(255, 79, 187)',
				label: 'Accuracy',
				showLine: true,
				data: [],
				borderColor: ['rgb(255, 79, 187)'],
				borderWidth: 4
			}],

		}

		// accuracy dataset is the first dataset being rendered
		const accSet = newData.datasets[0];

		for (let i = 0; i < this.props.sessions.length; i++) {
			const session = this.props.sessions[i];

			newData.labels.push('Session ' + i);
			accSet.data.push(session.accuracy);
			accSet.borderColor.push('rgb(255, 79, 187)');
		}

		this.chart.data = newData;
		this.chart.update({
			duration: 400,
		});


		
	}

	render() {

		this.updateChartData();

		return (
			<div>
				<Header>Stats</Header>
				<BodyContainer>
					<h3>Statistics</h3>
					<canvas ref="chart"/>
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