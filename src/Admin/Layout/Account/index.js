import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { shopUserState } from "../../../store/shopStore";

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="block"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
    size="large"
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: "Username is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          required: true,
          message: "Email is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="phone"
      label="Phone"
      rules={[
        {
          required: true,
          message: "Phone is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="address"
      label="Address"
      rules={[
        {
          required: true,
          message: "Address is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="city"
      label="City"
      rules={[
        {
          required: true,
          message: "City is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Button
      type="primary"
      style={{ background: "black", color: "white", border: "none" }}
    >
      Update
    </Button>
  </Form>
);

const Account = () => {
  const shop = shopUserState((state) => state.shop.shop);
  const [fields, setFields] = useState([
    {
      name: ["username"],
      value: shop.name,
    },
    {
      name: ["email"],
      value: shop.email,
    },
    {
      name: ["phone"],
      value: shop.phone,
    },
    {
      name: ["address"],
      value: shop.address,
    },
    {
      name: ["city"],
      value: shop.city,
    },
  ]);

  return (
    <div style={{paddingTop: "5rem"}}>
      <div
        style={{
          height: "70vh",
          width: "55rem",
          // border: "1px solid black",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <CustomizedForm
          fields={fields}
          onChange={(newFields) => {
            setFields(newFields);
          }}
        />
      </div>

      {/* <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre> */}
    </div>
  );
};

export default Account;
