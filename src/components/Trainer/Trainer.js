import React, { Component } from 'react';
import { connect } from 'react-redux';

class Trainer extends Component{

    render() {
        return (
            <div>
                <h1 >Training!</h1>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
