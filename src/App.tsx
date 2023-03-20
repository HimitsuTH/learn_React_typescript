import "./App.css";

import Login from "@/components/pages/Login";
import Index from "@/components/pages/Index";
import Navbar from "@/components/header/Navbar";
import Brand_id from "@/components/pages/Brand.id";
import EditUser from "./components/pages/user/EditUser";
import Brand from "./components/pages/Brand";

import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [path, setPath] = useState<boolean>(true);
  const location = useLocation();
  const usePathname = () => {
    if (location.pathname === "/login") {
      setPath(true);
    } else {
      setPath(false);
    }
    return path;
  };

  useEffect(() => {
    usePathname();
  }, [location.pathname]);
  return (
    <div className="relative">
      <Navbar path={path} />

      <div className="">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop/brand/:id" element={<Brand_id />} />
          <Route path="/user" element={<EditUser />} />
          <Route path="/shop/brand" element={<Brand />} />
        </Routes>
      </div>

    
    </div>
  );
}

export default App;
