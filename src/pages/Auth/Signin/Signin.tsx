import { SigninForm } from '@features';

import styles from './Signin.module.scss';

const Signin = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signinInfoWrapper}>
        <h2 className={styles.signinSubTitle}>Welcome!</h2>

        <h4 className={styles.signinTitle}>Sign in</h4>
      </div>
      <div className={styles.signinFormWrapper}>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
