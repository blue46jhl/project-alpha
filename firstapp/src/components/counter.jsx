import React, { Component } from 'react';


class Counter extends Component {
	state = {
		count: 0, 
	};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	handleIncrement = (product) => {
		console.log(product)
		this.setState({ count: this.state.count + 1})
	}

	render() { 
		return (
			<div> 
			<button onClick={() => this.handleIncrement(product)} 
			className="btn btn-secondary btn-sm"> 
			Increment	
			</button>
			</div>
		)
	};

}
