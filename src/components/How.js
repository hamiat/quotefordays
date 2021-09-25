import { Link } from "react-router-dom";

const How = ({ knowsAnswer }) => {
  return (
    <section className="how">
      <h1>How does the web work?</h1>
      <p>
        When the night has been too lonely And the road has been too long And
        you think that love is only For the lucky and the strong Just remember
        in the winter Far beneath the bitter snows Lies the seed that with the
        sun's love In the spring becomes the rose
      </p>

      <div className="next-btns">
        <button className="btn-gradient yellow">
          <Link to="/what">Back</Link>
        </button>
        <button className={`btn-gradient green ${knowsAnswer ? "bigger" : ""}`}>
          <Link to="/todo">Next</Link>
        </button>
      </div>
    </section>
  );
};

export default How;
