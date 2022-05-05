import React, { FC } from "react";
import Button from "../../common/Button/Button";
import styles from "./MoneySaveOnServices.module.scss";
import house from "../../../assets/images/house.png";

const MoneySaveOnServices: FC = () => {
  return (
    <section className={styles.banner}>
      <div
        className={styles.bannerImg}
        style={{ backgroundImage: `url(${house})` }}
      />
      <div className={styles.bannerText}>
        How to properly calculate taxes?
        <div className={styles.bannerButton}>
          <Button view="outlined" size="small">
            Learn now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoneySaveOnServices;
