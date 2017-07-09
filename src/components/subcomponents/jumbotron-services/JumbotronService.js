import React from 'react';
import PropTypes from 'prop-types';
import './JumbotronService.less';
import ListItem from '../list-item/ListItem';

const JumbortronService = (props) => {

  return (
    <div>
      <section className="jumbotron jumbotron-service text-center">
        <div className="container-heading container">
          <h1 className="jumbotron-heading">{props.heading}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ListItem faName = "fal fa-clipboard" color="brown" preTitle="Script" title=" Writing"/>
            </div>
            <div className="col-sm-4">
              <ListItem faName = "fas fa-film"  preTitle="Flim" title=" Making"/>
            </div>
            <div className="col-sm-4">
              <ListItem faName = "fal fa-bullhorn" color="dark-blue" preTitle="pro" title="duction"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

};

JumbortronService.propTypes = {
  heading: PropTypes.string
};

export default JumbortronService;
