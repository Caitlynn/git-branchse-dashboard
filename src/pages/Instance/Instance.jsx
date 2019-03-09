import { AppBar, Button, Card, CardTitle, CardText, CardActions } from 'react-toolbox';
import React, { Component } from 'react';
import HeadingCard from '../../components/HeadingCard';
import PropTypes from 'prop-types';
import InstanceCard from '../../components/InstanceCard';
import history from './fakelogs.txt';

function Terminal(props) {
	return (
		<div className="ReactBash">
			<div className="terminal__title-bar">
				<span className="terminal__button terminal__button--red">
				</span>
				<span className="terminal__button terminal__button--yellow">
				</span>
				<span className="terminal__button terminal__button--green">
				</span>
			</div>
			<div className="terminal__content">
				{props.history.map((item, i) => {
					return (
						<div key={i}>{item}</div>
					);
				})}
			</div>
		</div>
	);
}

class Instance extends React.Component {

	state = {
		terminalHistory: [],
	}

	componentDidMount() {
		this.animateHistory();
	}

	async animateHistory() {
		const items = history.split('\n');
		// for (let i = 0; i < items.length; i++) {
		// 	await this.asyncSetState({
		// 		terminalHistory: [
		// 			...this.state.terminalHistory,
		// 			items[i],
		// 		],
		// 	});
		// 	await sleep(getRandomArbitrary(0.1, 0.2));
		// }
		this.setState({ terminalHistory: items });
	}

	asyncSetState(newState) {
		return new Promise((resolve, reject) => {
			this.setState(newState, () => resolve());
		});
	}

	render() {
		return (
			<div className="instance">  
				<HeadingCard
					title="Typewriter"
					subtitle="branch"
					icon="apps"
				/>
				<div className='panel'>
					<div className="instance__terminal-section">
						<AppBar className='section'>Instance Logs</AppBar>
						<Terminal className ="terminalCard" history={this.state.terminalHistory} />
					</div>
					<div className="instance__details-section">
						<AppBar className='section'>Instance Details</AppBar>
						<InstanceCard
							instanceName="features-new-background"
							branchName="features-new-background"
							lastUpdated="10/10/2016"
							lastCommitMessage="I\'ve extensively redesigned the landing page!"
							healthStatus="Running"
							url="https://github.com/Place1/react-animated-writer.git"
							emoji="✅"
						/>
					</div>				
				</div>
			</div>
		);
	}
}

function sleep(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), seconds * 1000);
	});
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Instance;