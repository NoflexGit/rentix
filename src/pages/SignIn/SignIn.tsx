import React, { FC } from "react";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Space from "../../components/common/Space";
import Button from "../../components/common/Button";
import styles from "./SignIn.module.scss";
import { login } from "../../store/AuthSlice";
import useAppDispatch from "../../hooks/useAppDispatch";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  useDocumentTitle("Sign In");

  const handleClick = () => {
    dispatch(login());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.signInText}>Welcome back 🖐</div>
          <Form className={styles.form} onSubmit={handleClick}>
            <Space size="medium" fluid>
              <Input
                type="text"
                name="phone"
                label="Username"
                placeholder="Enter username"
              />
              <Input
                type="password"
                name="phone"
                label="Password"
                placeholder="Enter password"
              />
              <Button type="submit" fluid>
                Sign in
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
