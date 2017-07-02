import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.less';

const NavBar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-brand" href="#">{props.brand}</a>
      </nav>
    </div>
  );

};

NavBar.propTypes = {
  brand: PropTypes.string
};

export default NavBar;
