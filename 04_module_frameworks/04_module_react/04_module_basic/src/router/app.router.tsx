import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailPage } from "@/pods";
import { MyProvider } from "../my-provider";
import { switchRoutes } from "./routes";
import { LoginScene, ListScene } from "@/scenes";

export const AppRouter = () => {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path={switchRoutes.root} element={<LoginScene />} />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailPage />} />
        </Routes>
      </Router>
    </MyProvider>
  );
};