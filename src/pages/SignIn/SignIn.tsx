import React, { useCallback, useEffect } from 'react';
import Logo from '@/components/Logo/Logo';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Space from '@/components/Space/Space';
import Button from '@/components/Button/Button';
import styles from './SignIn.module.scss';
import { login } from '@/store/AuthSlice';
import useAppDispatch from '@/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import useAppSelector from '@/hooks/useAppSelector';

const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/overview');
    }
  }, [isAuthenticated, navigate]);

  const handleClick = useCallback(() => {
    dispatch(login());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/*<Logo />*/}
          <div className={styles.signInText}>Welcome back 🖐</div>
          <Form className={styles.form} onSubmit={handleClick}>
            <Space size="medium" fluid>
              <Input type="text" name="phone" label="Username" placeholder="Enter username" />
              <Input type="password" name="phone" label="Password" placeholder="Enter password" />
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
