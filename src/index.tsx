import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
