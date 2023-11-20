import "./header.scss";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../store/zustand";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { AuthContext } from "../../HOC/Layouts/Providers/AuthProvider";
import { useContext } from "react";
import AuthModal from "../AuthModal/AuthModal";

function Header() {
  const auth = useContext(AuthContext);
  const setSelectedCurency = useGlobalStore(
    (state) => state.setSelectedCurency
  );
  const currency = useGlobalStore((state) => state.currency);
  const location = useLocation();
  const navigate = useNavigate();
  const goodsCheckedAmount = useGlobalStore(
    (state) => state.goods.filter((v) => v.checked).length
  );
  const isSigned = useGlobalStore((state) => state.isSigned);
  const toggleSigned = useGlobalStore((state) => state.toggleSigned);
  console.log(auth);
  const changeSigned = () => {
    toggleSigned();
    auth.toggleAuth();
  };
  return (
    <header>
      <nav>
        <ul>
          <li className="dropdown">
            <CurrencyDropdown
              setSelectedCurency={setSelectedCurency}
              currency={currency}
            />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <div>
              {!(location.pathname == "/cart") ? (
                <>
                  {!goodsCheckedAmount ? null : <p>{goodsCheckedAmount}</p>}
                  <ShoppingCartIcon onClick={() => navigate("/cart")} />
                </>
              ) : (
                <>
                  <HomeIcon onClick={() => navigate("/")} />
                </>
              )}
              {!auth.isAuth ? (
                <>
                  <LoginIcon onClick={changeSigned} />
                  <GoogleIcon onClick={changeSigned} />
                </>
              ) : (
                <>
                  <LogoutIcon onClick={changeSigned}></LogoutIcon>
                </>
              )}
              <div className="themeSwitcher">
                <ThemeSwitch />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <AuthModal visible={auth.isAuth} onCancel={auth.toggleAuth} />
    </header>
  );
}

export default Header;
