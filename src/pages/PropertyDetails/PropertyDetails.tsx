import React, { FC } from "react";

import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./PropertyDetails.module.scss";

// import apartment1 from "../../assets/images/apartment-1.jpeg";

const ApartmentsPage: FC = () => {
  useDocumentTitle("6");

  return (
    <Row tag="section" className={styles.wrapper}>
      <Col width="6">123</Col>
    </Row>
  );
};

export default ApartmentsPage;
