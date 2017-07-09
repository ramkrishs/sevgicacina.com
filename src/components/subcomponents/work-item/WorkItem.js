import React from 'react';
import './WorkItem.less';

const WorkItem = () => {
  return (

    <li className="cards_item">
      <div className="card">

        <div className="card_image">
          <img src="http://placehold.it/500x300&text=%20" />
        </div>

        <div className="card_content">
          <h2 className="card_heading">First</h2>
          <p>I'm a card and I'm first. Quisque commodo hendrerit lorem quis egestas. Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque.</p>
          <a href="#" className="btn btn-outline-primary card_button">Button</a>
        </div>
      </div>
    </li>
  );
};

export default WorkItem;
