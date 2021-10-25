import React from 'react';
import { Row, Col } from '@/components/Grid';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import ApartmentCard from '@/components/ApartmentCard/ApartmentCard';
import styles from './Apartments.module.scss';

const ApartmentsPage = (): JSX.Element => {
  useDocumentTitle('My Apartments');
  return (
    <Row tag="section">
      <Col width="4">
        <ApartmentCard />
      </Col>
    </Row>
  );
};

export default ApartmentsPage;
