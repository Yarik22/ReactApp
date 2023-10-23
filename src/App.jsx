import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import "./app.scss";
import useGlobalStore from "./store/zustand";
import LandingLayout from "./HOC/Layouts/LandingLayout";
import { useEffect } from "react";
import Cart from "./pages/Cart/Cart";
function App() {
  const fetchCurrency = useGlobalStore((state) => state.fetchCurrency);
  const setCheckedGoods = useGlobalStore((state) => state.setCheckedGoods);
  useEffect(() => {
    fetchCurrency();
    setCheckedGoods();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
