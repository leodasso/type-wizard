import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">

    <Link to="/play">
      <h2 className="nav-title">Type Wizard</h2>
    </Link>

    <Link className="nav-link" to="/play">
      {/* Show this link if they are logged in or not,
      but call this link 'Home' if they are logged in,
      and call this link 'Login / Register' if they are not */}
      {props.user.id ? 'Play' : 'Login / Register'}
    </Link>

    {/* Show the link to the info page and the logout button if the user is logged in */}
    {props.user.id && (
      <>
        <Link className="nav-link" to="/stats">
          Stats
        </Link>

        <Link className="nav-link" to="/settings">
          Settings
        </Link>

        <LogOutButton className="nav-link"/>
      </>
    )}

    {/* Always show this link since the about page is not protected */}
    <Link className="nav-link" to="/about">
      About
    </Link>

  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
