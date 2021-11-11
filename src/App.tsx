import React from "react";
import { Routes, Route } from "react-router-dom";

import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";

const App = () => (
  <Routes>
    <Route path="/" element={<Repositories />} />
    <Route path="/developers" element={<Developers />} />
  </Routes>
);

export default App;
