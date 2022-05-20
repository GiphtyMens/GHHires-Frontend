import React from "react";
// import 'antd/dist/antd.css';
// import './index.css';
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = <Menu items={[{ label: "Action 1" }, { label: "Action 2" }]} />;

const Appointment = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: "Service", dataIndex: "service", key: "service" },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "2022-12-24 23:12:00",
        name: "This is production name",
        service: "Body massage",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Phone Number", dataIndex: "number", key: "number" },
    { title: "Service", dataIndex: "service", key: "service" },
    { title: "Amount (GHC)", dataIndex: "amount", key: "amount" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <button
          style={{
            height: "2rem",
            boxShadow: "none",
            width: "5rem",
            borderRadius: "5px",
            background: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          Confirm
        </button>
      ),
    },
  ];

  const data = [
    {
      // key: i,
      name: "Gifty Mensah",
      location: "Abura Opposite Hutchland",
      number: "23355820170",
      service: "Laundry and Hair dressing",
      amount: 98.0,
      createdAt: "30 June, 2022 9:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "14 June, 2022 12:30PM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "27 May, 2022 14:00PM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "01 May, 2022 9:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
    {
      // key: i,
      name: "Jacob Awe",
      location: "Aboom walls street",
      number: "23320824781",
      service: 500,
      amount: 75.0,
      createdAt: "05 July, 2022 11:00AM",
    },
  ];
  // for (let i = 0; i < 3; ++i) {
  //   data.push({
  //     key: i,
  //     name: "Screem",
  //     platform: "iOS",
  //     version: "10.3.4.5654",
  //     upgradeNum: 500,
  //     creator: "Jack",
  //     createdAt: "2014-12-24 23:12:00",
  //   });
  // }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
};

export default Appointment;
