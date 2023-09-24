import "../styles/footer.scss";

//To do:
//  - Add contact links
function Footer() {
  return (
    <div>
      <footer>
        <div>
          <p>&copy; {new Date().getFullYear()} GymBumstead</p>
          <p>Email: popov.yarik.popov@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
