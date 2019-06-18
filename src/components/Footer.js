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
            <li><a href="#coaches">Legendary Coaches</a></li>
            <li><a href="#players">Legendary Players</a></li>
            <li><a href="#teams">Legendary Teams</a></li>
            <li><a href="#">Join The Debate</a></li>
          </ul>
          <h4 class="text-light text-center">&copy; Legendary Basketball Copyright 2019. All Rights Reserved.</h4>
        </nav>
      </footer>
    );

  }

}
