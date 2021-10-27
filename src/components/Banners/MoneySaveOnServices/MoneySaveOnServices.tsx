import React from 'react';
import Button from '@/components/Common/Button/Button';
import styles from './MoneySaveOnServices.module.scss';
import house from '@/assets/images/house.png';

const MoneySaveOnServices = (): JSX.Element => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerImg} style={{ backgroundImage: `url(${house})` }} />
      <div className={styles.bannerText}>
        How to save money on services?
        <div className={styles.bannerButton}>
          <Button view="outlined">Learn now</Button>
        </div>
      </div>
    </section>
  );
};

export default MoneySaveOnServices;
