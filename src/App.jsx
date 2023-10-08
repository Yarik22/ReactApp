import { useState } from "react";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
function App() {
  const [isInCart, setIsInCart] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [goods, setGoods] = useState([
    {
      url: "src/assets/colla_pink_mango.webp",
      name: "Cola pink with mango",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/hydrtator_gb_grey.webp",
      name: "Gym Beam water bottle",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/just_whey_chocolate_milkshake_1_kg_gymbeam_1.webp",
      name: "Just Whey chocolate milkshake",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/jw2kg_gift_011.webp",
      name: "Just Whey mixed milkshake and gifts",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/peanut_butter_smooth_900g.webp",
      name: "Peanut butter",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/vitality_complex_120_tabs_gymbeam.webp",
      name: "Vitality complex box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/vitamin_d3_1000_iu_120_caps_gymbeam.webp",
      name: "Vitamin D3 box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
    {
      url: "src/assets/vitaminc_30_1.webp",
      name: "Vitamin C box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: "500UAH",
    },
  ]);
  return (
    <>
      <Header
        goodsCheckedAmount={goods.filter((val) => val.checked).length}
        isSigned={isSigned}
        setIsSigned={setIsSigned}
        setIsInCart={setIsInCart}
        isInCart={isInCart}
      ></Header>
      {isInCart ? (
        <Cart checkedGoods={goods.filter((v) => v.checked)}></Cart>
      ) : (
        <Main goods={goods} setGoods={setGoods}></Main>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
