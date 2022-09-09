import React from "react";
// antd
import { Layout } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/admin/SideMenu";
import TopHeader from "../../components/admin/TopHeader";
import RightList from "./right-manage/RightList";
import RoleList from "./right-manage/RoleList";
import UserList from "./user-manage/UserList";
import Home from "./home/Home";
import NoPermission from "./NoPermission/NoPermission";
import "./adminSand.css";
const { Content } = Layout;
export default function adminSand() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-manage/list" element={<UserList />} />
            <Route path="/right-manage/role/list" element={<RoleList />} />
            <Route path="/right-manage/right/list" element={<RightList />} />
            <Route path="/" element={<Navigate replace from="/" to="home" />} />
            <Route path="/*" element={<NoPermission />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
