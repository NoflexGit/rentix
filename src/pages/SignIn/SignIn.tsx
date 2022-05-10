import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Space from "../../components/common/Space";
import Button from "../../components/common/Button";
import useAppDispatch from "../../hooks/useAppDispatch";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Logo from "../../components/Logo";
import { auth } from "../../firebase";
import styles from "./SignIn.module.scss";

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useDocumentTitle("Sign In");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate, dispatch]);

  const handleClick = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (e) {}
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Logo />
          <div className={styles.welcomeMessage}>Welcome back 🖐</div>
          <Form className={styles.form} onSubmit={handleClick}>
            <Space size="medium" fluid>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                label="Username"
                placeholder="Enter username"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
                placeholder="Enter password"
              />
              <Button type="submit" loading={loading} fluid>
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
