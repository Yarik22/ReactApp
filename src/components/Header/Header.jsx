import "./header.scss";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../store/zustand";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import useLoggedState from "../../hooks/useLoggedState";

function Header() {
  const setSelectedCurency = useGlobalStore(
    (state) => state.setSelectedCurency
  );
  const [value, setValue] = useLoggedState();
  const currency = useGlobalStore((state) => state.currency);
  const location = useLocation();
  const navigate = useNavigate();
  const goodsCheckedAmount = useGlobalStore(
    (state) => state.goods.filter((v) => v.checked).length
  );
  const isSigned = useGlobalStore((state) => state.isSigned);
  const toggleSigned = useGlobalStore((state) => state.toggleSigned);
  const changeSigned = () => {
    toggleSigned();
    setValue(prev=>prev+1);
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
              {!(location.pathname == "/cart") ? (
                <>
                  {!goodsCheckedAmount ? null : <p>{goodsCheckedAmount}</p>}
                  <ShoppingCartIcon onClick={() => navigate("/cart")} />
                </>
              ) : (
                <HomeIcon onClick={() => navigate("/")} style={{ margin: 0 }} />
              )}
              {isSigned ? (
                <>
                  <LoginIcon onClick={changeSigned} />
                  <GoogleIcon onClick={changeSigned} />
                </>
              ) : (
                <>
                  <LogoutIcon onClick={changeSigned}></LogoutIcon>
                </>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
