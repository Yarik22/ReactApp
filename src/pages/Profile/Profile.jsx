// ProfilePage.js
import React from "react";
import { Card, Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Avatar size={64} icon={<UserOutlined />} />
        <Title level={2}>John Doe</Title>
        <Paragraph>Email: john.doe@example.com</Paragraph>
        <Paragraph>Location: City, Country</Paragraph>
        <Paragraph>
          Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Button type="primary">Edit Profile</Button>
      </Card>
    </div>
  );
};

export default Profile;
