import React, { FC } from "react";
import styles from "./TenantCard.module.scss";
import Avatar from "../common/Avatar";
import Text from "../common/Text";
import Button from "../common/Button";
import Space from "../common/Space";
import { ReactComponent as PlaneSvg } from "../../assets/images/icons/plane.svg";

const TenantCard: FC<IUserData> = ({
  firstName,
  lastName,
  image,
  phone,
  email,
}) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <section className={styles.wrapper}>
      <section className={`${styles.content} ${styles.personalManager}`}>
        <div className={styles.info}>
          <Avatar
            image={image}
            className={styles.image}
            name={fullName}
            type="rounded"
          />
          <div className={styles.infoText}>
            <Text size="large" weight="semi-bold" tag="p">
              {fullName}
            </Text>
            <Text>Tenant</Text>
          </div>
        </div>
        <Space size={10} className={styles.infoRows} fluid>
          <div className={styles.infoRow}>
            <Text>Phone:</Text>
            <Text>{phone}</Text>
          </div>
          <div className={styles.infoRow}>
            <Text>Email:</Text>
            <Text>{email}</Text>
          </div>
        </Space>
        <Button size="small" view="outlined" icon={<PlaneSvg />} fluid>
          Send Messages
        </Button>
      </section>
    </section>
  );
};

export default TenantCard;
