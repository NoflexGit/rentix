import React, { FC, useEffect, useState } from "react";
// import styles from "./Documents.module.scss";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useAppSelector from "../../hooks/useAppSelector";
import { getDocumentByUserId } from "../../services/documents";
import { Col, Row } from "../../components/common/Grid";
import DocumentCard from "../../components/DocumentCard";

const Documents: FC = () => {
  useDocumentTitle("Documents");
  const [items, setItems] = useState<any>(null);
  const userId = useAppSelector(({ user }) => user.id);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocumentByUserId(userId);
        setItems(data);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    getData();
  }, [userId]);
  if (!items) {
    return null;
  }
  return (
    <Row tag="section">
      {items.map((item: any) => (
        <Col width={{ xs: 12, md: 4, lg: 3 }} key={item.id}>
          <DocumentCard
            name={item.name}
            type={item.type}
            size={item.size}
            downloadUrl={item.url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Documents;
