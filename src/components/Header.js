import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
       <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
    </header>
  );
};

export default Header;
