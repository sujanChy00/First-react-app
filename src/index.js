import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './Components/Style.scss';
import App from "./App";
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)