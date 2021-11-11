import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";
import store from "./store";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
