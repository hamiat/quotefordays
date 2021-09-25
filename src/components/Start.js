import { Link } from "react-router-dom";

const Start = () => {
  return (
    <section className="start">
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          This project was by a student at Hyper Island, for created the purpose of learning React.
          What the project itself is, I am not sure but I hope that it keeps you entertained for brief while.
        </p>
      </div>
      <button className="btn-3d green start-btn">
        <Link to="/quote">Start!</Link>
      </button>
    </section>
  );
};

export default Start;
