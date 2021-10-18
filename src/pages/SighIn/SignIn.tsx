import React from 'react';
import Logo from '@/components/Logo/Logo';
import styles from './SignIn.module.scss';
import Form from '@/components/Form/Form';

const LoginPage = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Logo />
          <Form className={styles.form} onSubmit={() => {}}>
            Sign In
            <input type="text" />
            <input type="text" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
