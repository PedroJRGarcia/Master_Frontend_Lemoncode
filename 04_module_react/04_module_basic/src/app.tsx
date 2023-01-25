import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pods/login/login";
import { ListPage } from "./pods/list/list";
import { DetailPage } from "./pods/detail/detail";
import { MyProvider } from "./my-provider";

export const App = () => {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MyProvider>
  );
};
