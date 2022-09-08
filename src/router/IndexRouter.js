import React from "react";
import {HashRouter, Route, Routes } from "react-router-dom";
import AdminSand from "../views/admin/adminSand";
import Login from "../views/login/Login";

export default function indexRouter() {
  return (
    <HashRouter>
      <Routes>
   
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/" component={adminSand} /> */}
        <Route path="/*" element={ <AdminSand/>}/>
        {/* // localStorage.getItem("token")?   //如果没有token就跳转到login页面 重定向
        // <AdminSand></AdminSand>
        // <Redirect to="/login"/> */}
     
      </Routes>
    </HashRouter>
  );
}
