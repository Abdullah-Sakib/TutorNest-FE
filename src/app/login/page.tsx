import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TN | Login",
};
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
