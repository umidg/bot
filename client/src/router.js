import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chat from "./pages/chat";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="/chathome" element={<Chat />} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
