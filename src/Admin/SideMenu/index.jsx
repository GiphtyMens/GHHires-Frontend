import React from "react";
import { NavLink } from "react-router-dom";
import {
  // ReadOutlined,
  MailOutlined,
  // ShoppingCartOutlined,
  MessageOutlined,
  UserOutlined,
  DashboardOutlined,
  DotChartOutlined,
  // ProfileOutlined,
  FundOutlined,
  // FormOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
// const { SubMenu } = Menu;

const SideMenu = () => {
  return (
    <div>
      <Menu
        theme="light"
        mode="inline"
        style={{ minHeight: "100vh" }}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item
          activeClassName="active"
          style={{ fontWeight: "bold", fontSize: 12 }}
        >
          DASHBOARD
        </Menu.Item>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <NavLink activeClassName="active" to="/d/default">
            Default
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<FundOutlined />}>
          <NavLink activeClassName="active" to="/d/appointment">
            Appointment
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<DotChartOutlined />}>
          <NavLink activeClassName="active" to="/d/services">
            Sales
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<DotChartOutlined />}>
          <NavLink activeClassName="active" to="/d/services">
            Services
          </NavLink>
        </Menu.Item>
        <Menu.Item
          activeClassName="active"
          style={{ fontWeight: "bold", fontSize: 12 }}
        >
          APPS
        </Menu.Item>

        <Menu.Item key="5" icon={<MailOutlined />}>
          <NavLink activeClassName="active" to="/d/mails">
            Mail
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6" icon={<MessageOutlined />}>
          <NavLink activeClassName="active" to="/d/chats">
            Chat
          </NavLink>
        </Menu.Item>

        <Menu.Item key="7" icon={<CalendarOutlined />}>
          <NavLink activeClassName="active" to="/d/calendar">
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item
          activeClassName="active"
          style={{ fontWeight: "bold", fontSize: 12 }}
        >
          DATA
        </Menu.Item>
        <Menu.Item key="8" icon={<UserOutlined />}>
          <NavLink activeClassName="active" to="/d/account">
            Account
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="9" icon={<UserOutlined />}>
          <NavLink activeClassName="active" to="/d/account">
            Account
          </NavLink>
        </Menu.Item>
        <Menu.Item key="10" icon={<UserOutlined />}>
          <NavLink activeClassName="active" to="/d/account">
            Account
          </NavLink>
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default SideMenu;
