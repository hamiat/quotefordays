import { Link } from "react-router-dom";

const What = ({ showTools, hideText, ontoNext, knowsAnswer }) => {
  return (
    <section className="what">
      <h1>What is the web?</h1>

      <p>
        The web is a tool that people use to can talk and share information.
      </p>

      <p>Do you know what a tool is?</p>
      <div className="what-btns">
        <button className="btn-gradient cyan" onClick={ontoNext}>
          Yes
        </button>
        <button className="btn-gradient orange" onClick={showTools}>
          No
        </button>
      </div>

      <div style={{ display: hideText }}>
        <p>A tool is something that you can use to do or make something.</p>

        <p>A hammer is a tool that you can use to hit a nail.</p>
        <p>You can also use a thick book as a tool to hit a nail.</p>
        <p>A book is a tool that you can use to learn something new. </p>
        <p>
          The web is also a tool that you can use to learn something new or get
          information (on trees)...
        </p>
        <p>
          ... and a tool that can be used to do many other things. But more on
          that later…!
        </p>
      </div>

      <div className="next-btns">
        <button
          className={`btn-gradient yellow ${knowsAnswer ? "smaller" : ""}`}
        >
          <Link to="/">Back</Link>
        </button>
        <button className={`btn-gradient green ${knowsAnswer ? "bigger" : ""}`}>
          <Link to="/how">Next</Link>
        </button>
      </div>
    </section>
  );
};

export default What;
