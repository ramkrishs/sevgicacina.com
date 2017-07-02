import React from 'react';
import './HomePage.less';
import NavBar from '../subcomponents/navbar/NavBar';
import JumbortronLeftContent from '../subcomponents/jumbotron-left-content/JumbotronLeftContent';

class HomePage extends React.Component {
  render() {
    return (
    <div>
        <NavBar brand=""/>
        <JumbortronLeftContent heading="Sevgi Isabel Cacina" para="Something short and leading about the collection below—its contents, the creator, etc."/>
        <div className="album text-muted">
          <div className="container">
            <div className="row" />
          </div>
        </div>
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
