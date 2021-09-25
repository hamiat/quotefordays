import { Link } from "react-router-dom";

const Start = () => {
  return (
    <section className="start">
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
          mi nulla. Maecenas et rhoncus diam. Nulla mattis suscipit fringilla.
        </p>
      </div>
      <button className="btn-3d green start-btn">
        <Link to="/quote">Start!</Link>
      </button>
    </section>
  );
};

export default Start;
