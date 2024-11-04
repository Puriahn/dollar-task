import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import global_fa from "./Directory/fa/global_fa.json"
import global_en from "./Directory/en/global_en.json"
import i18next from "i18next";
import { interpolate } from "framer-motion";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolate:{escapevalue:false},
  lng:"en",
  resources:{
    en:{
      global:global_en
    },
    fa:{
      global:global_fa
    }
  }
})


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <App />
    </Provider>
    </I18nextProvider>
  </StrictMode>
);
