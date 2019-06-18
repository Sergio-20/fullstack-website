import React, { Component } from 'react';

import '../../public/style.css';

export default class Header extends Component {

  constructor()
  {
    super();
    this.state = {};
  }

  render() {
    return(
      <header>
        <nav>
          <ul>
            <a href="#"><li><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftooelecity.org%2Fwp-content%2Fuploads%2F2013%2F03%2FBasketball.png&f=1" alt="Logo" /></li></a>
            <a href="#coaches"><li>Legendary Coaches</li></a>
            <a href="#players"><li>Legendary Players</li></a>
            <a href="#teams"><li>Legendary Teams</li></a>
            <a href="#"><li>Join The Debate</li></a>
          </ul>
        </nav>
      </header>
    );
  }

}
