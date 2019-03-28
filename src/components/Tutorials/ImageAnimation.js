import React, { Component } from 'react';
import './Tutorials.css';

class ImageAnimation extends Component{

	state = {
		interval: 0,
		imageIndex: 0,
	}

	componentDidMount() {
		const intervalId = setInterval(this.updateImage, this.props.interval); 
		this.setState({intervalId: intervalId});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

	updateImage = () => {

		// increase the index
		let newIndex = this.state.imageIndex + 1;
		if (newIndex >= this.props.images.length) {
			newIndex = 0;
		}

		this.setState({imageIndex: newIndex});
	}

	render() {
		return (
            <img  
                className="tutorial-image" src={this.props.images[this.state.imageIndex]}/>
		);
	}
}

export default ImageAnimation;