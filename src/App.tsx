import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
