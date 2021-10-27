import React from 'react';
import { Row, Col } from '@/components/Common/Grid';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import ApartmentCard from '@/components/ApartmentCard/ApartmentCard';

const ApartmentsPage = (): JSX.Element => {
  useDocumentTitle('My Apartments');

  return (
    <Row tag="section">
      <Col width="3">
        <ApartmentCard />
      </Col>
    </Row>
  );
};

export default ApartmentsPage;
