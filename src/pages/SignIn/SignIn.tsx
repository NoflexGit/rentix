import React from 'react';
import Logo from '@/components/Logo/Logo';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Space from '@/components/Space/Space';
import styles from './SignIn.module.scss';
import Button from '@/components/Button/Button';

const LoginPage = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/*<Logo />*/}
          <div className={styles.signInText}>Welcome back 🖐</div>
          <Form className={styles.form} onSubmit={() => {}}>
            <Space size="medium" fluid>
              <Input type="text" name="phone" label="Username" placeholder="Enter username" />
              <Input type="password" name="phone" label="Password" placeholder="Enter password" />
              <Button fluid>Sign in</Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
