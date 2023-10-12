import Image from "next/image";
import notFound from "../assets/404.png";

const NotFoundPage = () => {
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
      <Image src={notFound} width={500} alt="login image" />
    </div>
  );
};

export default NotFoundPage;
