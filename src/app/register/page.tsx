import React from "react";
import { Metadata } from "next";
import Register from "@/components/Register/Register";

export const metadata: Metadata = {
  title: "TN | Registration",
};
const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterPage;
