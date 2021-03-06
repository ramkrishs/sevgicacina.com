import React from 'react';
import PropTypes from 'prop-types';
import './JumbotronLeftContent.less';

const JumbortronLeftContent = (props) => {

  return (
    <div>
      <section className="jumbotron jumbotron-left-content text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{props.heading}</h1>
          <p className="lead text-muted">{props.para}</p>
        </div>
      </section>
    </div>
  );

};

JumbortronLeftContent.propTypes = {
  heading: PropTypes.string,
  para:PropTypes.string
};

export default JumbortronLeftContent;
