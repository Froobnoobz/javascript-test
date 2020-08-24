import React from 'react';
import "./hamburger-menu.scss"
import {GiHamburgerMenu} from 'react-icons/gi';

export default class HamburgerDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick = () => {
    
  }

  render() {
    return (
      <div id="hamburger-menu">
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
    );
  }
}