import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <div id="logo"><Link to='/'><img src="https://i.imgur.com/2V35VG2.png" /></Link></div>
        <div id="menu-items">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/announcements'>ANNOUNCMENTS</Link></li>
            <li><Link to='/catalog'>CATALOG</Link></li>
            <li><Link to='/info'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Menu;
