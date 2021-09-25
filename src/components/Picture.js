import { Link } from "react-router-dom";
import pic from '../assets/ucandoit.jpg'

const Picture = () => {
    return ( 
    <section className="picture">
        <h1>Picture</h1>
        <img src={pic} alt="A dog patting another on the head with - caption you can do it!" />
        <div className="next-btns">
        <button className={`btn-gradient green`}>
          <Link to="/quote">Quote</Link>
        </button>
      </div>
    </section>);
}
 
export default Picture;