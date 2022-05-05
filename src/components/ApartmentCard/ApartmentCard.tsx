/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/mouse-events-have-key-events */
import React, { FC } from "react";
import styles from "./ApartmentCard.module.scss";

interface IProps {
  data: {
    image: string;
    address: string;
    location: string;
    rooms: number;
    bathrooms: number;
    space: number;
  };
  // onHover: (data: any) => void;
}

const ApartmentCard: FC<IProps> = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <img src={data.image} alt={data.address} />
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <p>{data.address}</p>
          <span>{data.location}</span>
        </div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Rooms: </div>
            <span>{data.rooms}</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Bathrooms: </div>
            <span>{data.bathrooms}</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Space: </div>
            <span>{data.space} m²</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentCard;
