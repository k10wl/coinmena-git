import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "@hooks/useFetch";

import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";

const App = () => {
  const { isLoading, error } = useFetch();

  if(isLoading) {
    return <h1>LOADING...</h1>
  }

  return (
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
  );
};

export default App;
