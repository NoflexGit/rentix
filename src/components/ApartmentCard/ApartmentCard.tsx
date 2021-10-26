import React from 'react';
import styles from './ApartmentCard.module.scss';
import apartment1 from '@/assets/images/apartment-1.jpeg';

const ApartmentCard = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.price}>1200$</div>
        <img src={apartment1} alt="Anemoonstraat 11MP" />
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <p>193 May Street</p>
          <span>New Port, 893 HS London</span>
        </div>
        <div className={styles.dates}>
          <p>Rented from: Feb 25, 2020</p>
          <span>Next payment: May 25 2022</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
