import "./header.scss";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
//To do:
//  - Add routing

function Header({
  goodsCheckedAmount,
  isSigned,
  setIsSigned,
  setIsInCart,
  isInCart,
  selectedCurency,
  setSelectedCurency,
  changeCurrency,
  currency,
}) {
  const changeSigned = () => {
    setIsSigned(!isSigned);
  };
  return (
    <header>
      <nav>
        <ul>
          <li className="dropdown">
            <CurrencyDropdown
              selectedCurency={selectedCurency}
              setSelectedCurency={setSelectedCurency}
              changeCurrency={changeCurrency}
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
              {!isInCart ? (
                <>
                  {!goodsCheckedAmount ? null : <p>{goodsCheckedAmount}</p>}
                  <ShoppingCartIcon
                    onClick={() => setIsInCart((prev) => !prev)}
                  />
                </>
              ) : (
                <HomeIcon onClick={() => setIsInCart((prev) => !prev)} />
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
