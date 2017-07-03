import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/subcomponents/navbar/NavBar';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
     <div>
       <NavBar brand=""/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
