import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Nav from "./Nav";
import { shopUserState } from "../store/shopStore";
import { RiRadioButtonLine } from "react-icons/ri";
import { Layout, Button } from "antd";
// import PostList from "./Layout/Posts/PostList";
// import SubNavigation from "../../components/SubNavigation";
// import mainDasboard from "./Layout/Default";
// import Chart from "./chart";
// import Sales from "./Layout/Sales";
// import AddBook from "./Layout/Books/AddBook/index";
// import BookList from "./Layout/Books/BookList/index";
const { Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const logout = shopUserState((state) => state.logOut);
  return (
    <div>
      {/* <SubNavigation /> */}
      <Layout>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width="250"
          style={{
            borderRightColor: "white",
            minHeight: "120vh",
            background: "white",
          }}
        >
          <div
            style={{
              height: "12rem",
              width: "15rem",
              // border: "1px solid black",
              margin: "0 auto",
              padding: "40px 0 0 0",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", textAlign: "center" }}>
              <RiRadioButtonLine
                color="green"
                size={31}
                style={{ margin: "9px 10px 0 3rem" }}
              />
              {"  "}
              <p style={{ fontSize: "28px", fontWeight: "bold" }}>Online</p>
            </div>
            {/* <br /> */}
            <div>
              <button
                onClick={() => logout()}
                style={{
                  height: "2.1rem",
                  width: "8rem",
                  borderRadius: "5px",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "none",
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <SideMenu style={{ height: "100%" }} />
        </Sider>
        <Content style={{ backgroundColor: "#f9f9f9" }}>
          <Nav />
          <div style={{ width: "100%" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Dashboard;
