type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <div style={{ display: "flex", marginBottom: "10px" }}>{children}</div>
    </div>
  );
};

export default ActionBar;
