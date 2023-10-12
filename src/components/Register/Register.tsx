"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
import { registerSchema } from "@/schemas/register";
import { useCreateUserMutation } from "@/redux/api/userApi";

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      delete data.confirm_password;
      const res = await createUser({ ...data }).unwrap();

      console.log(isSuccess);
      if (isSuccess) {
        router.push("/login");
        message.success("User created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Create a New Account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
            <div>
              <FormInput
                name="first_name"
                type="text"
                size="large"
                label="First Name"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="last_name"
                type="text"
                size="large"
                label="Last Name"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="email"
                type="email"
                size="large"
                label="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="confirm_password"
                type="password"
                size="large"
                label="Confirm Password"
                required
              />
            </div>
            <Button disabled={isLoading} type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
