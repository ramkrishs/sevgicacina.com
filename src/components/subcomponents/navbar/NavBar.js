import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.less';
import $ from 'jquery';
import classNames from 'classnames';
class NavBar extends React.Component {

  state = {

    istoggled : true,
    MQL:1170,
    previousTop:0

  };

  componentDidMount = () => {


    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {

    this.setState( (prevState) => ({
      istoggled:!prevState.istoggled
    }));

  };

  handleScroll = () => {

    const headerHeight = $('.cd-header').height();

    let currentTop = $(window).scrollTop();

    //check if user is scrolling up
    if (currentTop < this.state.previousTop) {
      //if scrolling up...

      if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
        $('.cd-header').addClass('is-visible');
      } else {
        $('.cd-header').removeClass('is-visible is-fixed');
      }
    } else {
      //if scrolling down...
      $('.cd-header').removeClass('is-visible');
      if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
    }

    this.setState({
      previousTop: currentTop
    });
    }



  render() {
    let menuClass = classNames({
      'cd-menu-icon': this.state.istoggled,
      'cd-menu-icon is-clicked': !this.state.istoggled
    });

    let headerClass = classNames({
      'cd-header': this.state.istoggled,
      'cd-header menu-is-open is-fixed is-visible': !this.state.istoggled
    });

    let navClass = classNames({
      'cd-primary-nav': this.state.istoggled,
      'cd-primary-nav is-visible': !this.state.istoggled
    });

    return (
      <div className="nav-bar">
        <header className={headerClass}>
          <a className="cd-primary-nav-trigger" onClick={this.handleClick}>
            <span className="cd-menu-text">Menu</span><span className={menuClass}/>
          </a>

        </header>
        <nav>
          <ul className={navClass}>
            <li className="cd-label">Profile</li>

            <li><a href="#0">Home</a></li>
            <li><a href="#0">About</a></li>

            <li className="cd-label">My Work</li>
            <li><a href="#0">Ghosted</a></li>

            <li className="cd-label">Contact</li>
            <li><a href="#0">Contacts</a></li>



          </ul>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  brand: PropTypes.string
};

export default NavBar;
