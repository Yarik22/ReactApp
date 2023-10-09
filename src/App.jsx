import { useEffect, useState } from "react";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
const currencyAPIUrl = import.meta.env.VITE_APP_CURRENCY_API_URL;
function App() {
  const [isInCart, setIsInCart] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [currency, setCurrency] = useState(null);
  const [selectedCurency, setSelectedCurency] = useState("USD");
  console.log(selectedCurency);
  const fetchCurrency = async () => {
    try {
      const response = await fetch(currencyAPIUrl);
      if (response.ok) {
        const json = await response.json();
        return json["conversion_rates"];
      } else {
        throw new Error("Failed to fetch currency data");
      }
    } catch (error) {
      console.error("Error fetching currency:", error);
      return null;
    }
  };
  const changeCurrency = (newCurrency, mult) => {
    const newGoods = goods.map((item) => ({
      ...item,
      currency: newCurrency,
      price: Math.floor(item.USDprice * mult),
    }));
    console.log(newGoods);
    setGoods(newGoods);
  };
  useEffect(() => {
    fetchCurrency().then((data) => {
      if (data !== null) {
        setCurrency(data);
        console.log(data);
      }
    });
  }, []);
  const [goods, setGoods] = useState([
    {
      url: "src/assets/colla_pink_mango.webp",
      name: "Cola pink with mango",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/hydrtator_gb_grey.webp",
      name: "Gym Beam water bottle",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/just_whey_chocolate_milkshake_1_kg_gymbeam_1.webp",
      name: "Just Whey chocolate milkshake",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/jw2kg_gift_011.webp",
      name: "Just Whey mixed milkshake and gifts",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/peanut_butter_smooth_900g.webp",
      name: "Peanut butter",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/vitality_complex_120_tabs_gymbeam.webp",
      name: "Vitality complex box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/vitamin_d3_1000_iu_120_caps_gymbeam.webp",
      name: "Vitamin D3 box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
    },
    {
      url: "src/assets/vitaminc_30_1.webp",
      name: "Vitamin C box",
      checked: false,
      description:
        "Some description................. ................... ..................... .................... ........................................",
      price: 500,
      USDprice: 500,
      currency: "USD",
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
        selectedCurency={selectedCurency}
        setSelectedCurency={setSelectedCurency}
        changeCurrency={changeCurrency}
        currency={currency}
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
