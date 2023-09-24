import "./header.scss";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
//To do:
//  - Add routing
function Header({ goodsCheckedAmount, isSigned, setIsSigned }) {
  const changeSigned = () => {
    setIsSigned(!isSigned);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <div>
              {!goodsCheckedAmount ? null : <p>{goodsCheckedAmount}</p>}
              <ShoppingCartIcon />
            </div>
            {isSigned ? (
              <>
                <LoginIcon onClick={changeSigned} />
                <GoogleIcon onClick={changeSigned} />
              </>
            ) : (
              <LogoutIcon onClick={changeSigned}></LogoutIcon>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
