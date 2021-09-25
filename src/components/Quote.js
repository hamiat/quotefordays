import { Link } from "react-router-dom";


const Quote = ({ quote = [] }) => {
  return (
    <section className="quote">
      <h1>{quote.author}</h1>
      <p>{quote.text}</p> 
      <div className="next-btns">
        <button className="btn-gradient yellow">
          <Link to="/picture">Picture</Link>
        </button>
        
      </div>
    </section>
  );
};

export default Quote;
