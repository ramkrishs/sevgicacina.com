import React from 'react';
import PropTypes from 'prop-types';
import './JumbotronWork.less';
import WorkItem from '../work-item/WorkItem';

const JumbortronWork = (props) => {

  return (
    <div>
      <section className="jumbotron jumbotron-work text-center">
        <div className="container-heading container">
          <h1 className="jumbotron-heading">{props.heading}</h1>
        </div>
        <div className="container">
          <div className="row">
             <div className="cards">
                <WorkItem title="Ghosted" summary="This is is summary"/>


                <WorkItem title="Ghosted" summary="This is is summary"/>


                <WorkItem title="Ghosted" summary="This is is summary"/>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

};

JumbortronWork.propTypes = {
  heading: PropTypes.string
};

export default JumbortronWork;
