import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import "./app.scss";
import useGlobalStore from "./store/zustand";
import LandingLayout from "./HOC/Layouts/LandingLayout";
import { useEffect } from "react";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Debug from "./pages/Debug/Debug";
import useLocationPath from "./hooks/useLocationPath";
import ThemeProvider from "./HOC/Layouts/Providers/ThemeProvider";
import AuthProvider from "./HOC/Layouts/Providers/AuthProvider";
function App() {
  const fetchCurrency = useGlobalStore((state) => state.fetchCurrency);
  const setCheckedGoods = useGlobalStore((state) => state.setCheckedGoods);
  const [path] = useLocationPath();
  useEffect(() => {
    fetchCurrency();
    setCheckedGoods();
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/debug" element={<Debug path={path} />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
