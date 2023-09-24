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
        </div>
      </footer>
    </>
  );
}

export default Footer;
