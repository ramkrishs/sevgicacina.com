import React from 'react';
import './ListItem.less';
import classNames from 'classnames';

const ListItem = (props) => {
  return (

      <div className="card rk-Item">
        <div className="card-block">
          <i className={classNames(props.faName ,'fa-4x',props.color)}></i>
          <h4 className="rk-Item-title"><span className="text-gray-dark">{props.preTitle}</span>{props.title}</h4>
        </div>
      </div>
  );
};

export default ListItem;
