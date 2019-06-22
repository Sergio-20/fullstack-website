import React, { Component } from 'react';

import '../../public/style.css';

export default class Trending extends Component {

  constructor()
  {
    super();
    this.state = {};
  }

  render() {

    return(

      <section className="trending-section">

        <h2 className="text-center">Trending Legendary Coaches</h2>

        <section id="coaches" className="trending-coaches">

          <article>

            <a href="#">
              <h3>Phil Jackson</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Phil_Jackson_3_cropped.jpg/200px-Phil_Jackson_3_cropped.jpg" alt="Phil Jackson" />
              <h4>33 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Phil Jackson</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Phil_Jackson_3_cropped.jpg/200px-Phil_Jackson_3_cropped.jpg" alt="Phil Jackson" />
              <h4>33 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Phil Jackson</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Phil_Jackson_3_cropped.jpg/200px-Phil_Jackson_3_cropped.jpg" alt="Phil Jackson" />
              <h4>33 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Phil Jackson</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Phil_Jackson_3_cropped.jpg/200px-Phil_Jackson_3_cropped.jpg" alt="Phil Jackson" />
              <h4>33 Seasons</h4>
            </a>

          </article>

        </section>

        <h2 className="text-center">Trending Legendary Players</h2>

        <section id="players" className="trending-players">

          <article>

            <a href="#">
              <h3>Michael Jordan</h3>
              <img src="https://d2cwpp38twqe55.cloudfront.net/req/201905091/images/players/jordami01.jpg" alt="Michael Jordan" />
              <h4>Chicago Bulls</h4>
              <h4>15 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Michael Jordan</h3>
              <img src="https://d2cwpp38twqe55.cloudfront.net/req/201905091/images/players/jordami01.jpg" alt="Michael Jordan" />
              <h4>Chicago Bulls</h4>
              <h4>15 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Michael Jordan</h3>
              <img src="https://d2cwpp38twqe55.cloudfront.net/req/201905091/images/players/jordami01.jpg" alt="Michael Jordan" />
              <h4>Chicago Bulls</h4>
              <h4>15 Seasons</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Michael Jordan</h3>
              <img src="https://d2cwpp38twqe55.cloudfront.net/req/201905091/images/players/jordami01.jpg" alt="Michael Jordan" />
              <h4>Chicago Bulls</h4>
              <h4>15 Seasons</h4>
            </a>

          </article>

        </section>

        <h2 className="text-center">Trending Legendary Teams</h2>

        <section id="teams" className="trending-teams">

          <article>

            <a href="#">
              <h3>Los Angeles Lakers</h3>
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vectorsland.com%2Fimgd%2Fl84817-los-angeles-lakers-logo-44805.png&f=1" alt="" />
              <h4>1999-2000</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Los Angeles Lakers</h3>
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vectorsland.com%2Fimgd%2Fl84817-los-angeles-lakers-logo-44805.png&f=1" alt="" />
              <h4>1999-2000</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Los Angeles Lakers</h3>
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vectorsland.com%2Fimgd%2Fl84817-los-angeles-lakers-logo-44805.png&f=1" alt="" />
              <h4>1999-2000</h4>
            </a>

          </article>

          <article>

            <a href="#">
              <h3>Los Angeles Lakers</h3>
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vectorsland.com%2Fimgd%2Fl84817-los-angeles-lakers-logo-44805.png&f=1" alt="" />
              <h4>1999-2000</h4>
            </a>

          </article>

        </section>

        <section id="debate" className="the-debate">

            <a className="twitter-timeline" data-width="400" data-height="800" data-theme="dark" href="https://twitter.com/NBA?ref_src=twsrc%5Etfw">Tweets by NBA</a>

            <a className="twitter-timeline" data-width="400" data-height="800" data-theme="dark" href="https://twitter.com/ESPNNBA?ref_src=twsrc%5Etfw">Tweets by ESPNNBA</a>

            <a className="twitter-timeline" data-width="400" data-height="800" data-theme="dark" href="https://twitter.com/YahooSportsNBA?ref_src=twsrc%5Etfw">Tweets by YahooSportsNBA</a>

            <a className="twitter-timeline" data-width="1200" data-height="800" data-theme="dark" href="https://twitter.com/NBAalumni?ref_src=twsrc%5Etfw">Tweets by NBAalumni</a>

        </section>

      </section>

    );

  }

}
