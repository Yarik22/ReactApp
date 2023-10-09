import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
