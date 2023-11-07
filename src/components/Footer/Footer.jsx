import { Link } from "react-router-dom";
import "./footer.scss";

//To do:
//  - Add contact links
function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>&copy; {new Date().getFullYear()} GymBumstead</p>
          <p>Email: popov.yarik.popov@gmail.com</p>
          <Link to="debug">Debug</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
