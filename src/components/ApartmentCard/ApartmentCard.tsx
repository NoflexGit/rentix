import React from 'react';
import styles from './ApartmentCard.module.scss';
import apartment1 from '@/assets/images/apartment-1.jpeg';

interface IProps {
  image?: string;
  price?: string;
  city?: string;
  address?: string;
}

const ApartmentCard = ({ image, price, city, address }: IProps): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.price}>1200$</div>
        <img src={apartment1} alt="Anemoonstraat 11MP" />
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <span>New Port, 893 HS London</span>
          <p>193 May Street</p>
        </div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Rooms: </div>
            <span>3</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Bathrooms: </div>
            <span>1</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Square: </div>
            <span>89 m²</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentCard;
