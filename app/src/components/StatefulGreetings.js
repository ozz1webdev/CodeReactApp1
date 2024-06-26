import React from 'react';

class StatefulGreetings extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			introduction: 'Hello, ',
			buttonText: 'Exit',
		};
	}

	handleClick() {
		this.setState({ 
				introduction: 'Goodby,  ',
				buttonText: 'Enter' });	
	}

	render() {
		return (
			<div>
				<h1>{this.state.introduction} {this.props.greeting}!</h1>
				<button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
			</div>
		);
	}
}

export default StatefulGreetings