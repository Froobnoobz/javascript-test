import React from 'react';
import "./hamburger-menu.scss"
import {GiHamburgerMenu} from 'react-icons/gi';
import {MenuDropdown} from './dropdown/menu-dropdown';

// TO-DO: Add animation for opening drop down
// On defocus of the drop down, close dropdown
// On open of menu, change icon of hamburger and rechange when closed
export default class HamburgerDropdown extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = { open: false };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <div id="hamburger-menu" onClick = {this.handleClick}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </div>
        {this.state.open ? <MenuDropdown></MenuDropdown> : <div></div>}
      </div>
      
    );
  }
}