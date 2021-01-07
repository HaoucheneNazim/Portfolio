import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <div id="container">
      <Header />
      <div id="main">
        <main>
          <section className="frontline">
            <h1>Hi. I'm Nazim, Front End Dev in progress. </h1>
          </section>
          <section className="wallpaper-container">
            <img src="img/wallpaper.jpg" className="wallpaper" alt="Wallpaper"/>
          </section>
          <article>
            <section>
              <p>
                <h3><b>About:</b></h3><br/>
                        I am currently following a front end developper certification/formation at AFPA. I live in
                        Clermont Ferrand where i used to be a financial advisor for EDF customers and also had many
                        activities in my past, from cook to gardener. As far as i can remember, i had a keyboard in my
                        hands, and the memory of installing my first GPU in the 2000s is the one i cherish the most. If
                        your reading this, i hope we will have many opportunities to work together and make each
                        opportunity a rewarding experience and maybe along the way, a friendship!
                        </p>
            </section>

            <section>
              <p><br/><br/>
                <h3><b>Projects:</b></h3><br/>
                <i>Atlantube</i><br/>
                        A video hosting platform based on the participation of each viewer with the choice of sharing
                        data or with currency/monetary donations.<br/><br/>
                        <i>Video Games</i><br/>
                        A multiplayer/collaboration local game based on the Unreal Engine 4. Like any party games, it's
                        mainly composed of different puzzles mini games where each player has to defeat and survive
                        against his opponents.<br/><br/>
                        <i>Hardware Benchmark Website</i><br/>
                        An independant comparative pricing website which find for you the best discounts and deals on
                        any hardware within your budget.
                        </p>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home;




