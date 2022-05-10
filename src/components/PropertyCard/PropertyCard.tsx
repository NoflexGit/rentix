/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/mouse-events-have-key-events */
import React, { FC } from "react";
import statusMapping from "../../configs/propertyStatusMapping";
import styles from "./PropertyCard.module.scss";
import Label from "../common/Label";

interface IProps {
  data: IProperty;
}

const PropertyCard: FC<IProps> = ({ data }) => {
  const status = statusMapping[data.status.toLowerCase()];

  return (
    <section className={styles.wrapper}>
      <Label
        size="small"
        text={status.text}
        color={status.color}
        className={styles.status}
      />
      <div className={styles.image}>
        <img src={data.image} alt={data.address} />
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <p>{data.address}</p>
          <span>{data.location}</span>
        </div>
        <div className={styles.price}>
          <span>Price/month:</span> ${data.price}
        </div>
        <div className={styles.features}>
          {data.specifications.rooms && (
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Rooms: </div>
              <span>{data.specifications.rooms}</span>
            </div>
          )}
          {data.specifications.bathrooms && (
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Bathrooms: </div>
              <span>{data.specifications.bathrooms}</span>
            </div>
          )}
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>Space: </div>
            <span>{data.specifications.area} m²</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCard;
