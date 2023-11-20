import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styles from "./landingLayout.module.scss";
function LandingLayout() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <section style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default LandingLayout;
