import React, { FC } from "react";
import { capitalize } from "lodash";
import styles from "./AssistantCard.module.scss";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import Text from "../common/Text";
import { ReactComponent as PlaneSvg } from "../../assets/images/icons/plane.svg";

const AssistantCard: FC<IUserData> = ({
  role,
  firstName,
  lastName,
  image,
  phone,
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
            <Text>{capitalize(role)}</Text>
          </div>
        </div>
        <Text size="small">
          Do you have any questions? <br /> Please call or send a message.
        </Text>
        <Text size="large" tag="p" className={styles.phone}>
          {phone}
        </Text>
        <Button size="small" icon={<PlaneSvg />} fluid>
          Send Messages
        </Button>
      </section>
    </section>
  );
};

export default AssistantCard;
