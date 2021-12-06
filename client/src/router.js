import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<h1>Login</h1>} />
      <Route path="/chathome" element={<h1>Home</h1>} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
