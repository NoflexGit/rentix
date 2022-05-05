import React, { FC } from "react";
import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ApartmentCard from "../../components/ApartmentCard";

const ApartmentsPage: FC = () => {
  useDocumentTitle("My Properties");

  return (
    <Row tag="section">
      <Col width="3">
        <ApartmentCard />
      </Col>
    </Row>
  );
};

export default ApartmentsPage;
