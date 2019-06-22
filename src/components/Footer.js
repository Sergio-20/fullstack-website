import React, { Component } from 'react';

import '../../public/style.css';

export default class Footer extends Component {

  constructor()
  {
    super();
    this.state = {};
  }

  render() {

    return(
      <footer>
        <nav>
          <ul>
            <li><a href="#coaches-heading">Legendary Coaches</a></li>
            <li><a href="#players-heading">Legendary Players</a></li>
            <li><a href="#teams-heading">Legendary Teams</a></li>
            <li><a href="#debate">Join The Discussion</a></li>
          </ul>
          <h4 className="text-light text-center">&copy; Legendary Basketball Copyright 2019. All Rights Reserved.</h4>
        </nav>
      </footer>
    );

  }

}
