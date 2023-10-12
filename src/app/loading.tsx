import { Space, Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
