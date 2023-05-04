import './about.css';
import Owners from "../images/adrianmario.png"

const About = () => {
  return (
    <section className="about py-5">
      <div className="container">
        <div className=" row">
          <article className="col col-md-6 about-section">
            <h2 className="text-white section-title mb-4">About Us</h2>
            <p className="lead-text">
              Little Lemon is a charming neighbourhood bistro that serves a
              simple food and classic cocktails in a lively but casual
              environment.
            </p>
            <p className="pb-3 lead-text">
              Co-owned by Adrian and Mario, the restaurant features a locally
              sourced menu with daily specials.
            </p>
          </article>
          <article className="col col-md-6">
            <img
              className="img-fluid about-img"
              src={Owners}
              alt="Adrian and Mario"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
