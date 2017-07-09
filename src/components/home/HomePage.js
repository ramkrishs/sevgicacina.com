import React from 'react';
import './HomePage.less';
import JumbortronLeftContent from '../subcomponents/jumbotron-left-content/JumbotronLeftContent';
import JumbortronService from  '../subcomponents/jumbotron-services/JumbotronService';
import JumbortronWork from "../subcomponents/jumbotron-work/JumbotronWork";

class HomePage extends React.Component {
  render() {
    return (
    <div>

        <JumbortronLeftContent
          heading="Sevgi Isabel Cacina"
          para="Something short and leading about the collection below—its contents, the creator, etc."/>
        <JumbortronService heading="Professional Service"/>
        <JumbortronWork heading="My Portfolio"/>



      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Sevgi Isabel Cacina &copy; Feel free to contact me. I'm looking forward to new opportunities</p>

        </div>
      </footer>

    </div>
    );
  }
}

export default HomePage;
