import React, { FC, useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Col, Row } from "../../components/common/Grid";
import styles from "./Messages.module.scss";

const Messages: FC = () => {
  const [, setChats] = useState<any>([]);
  useEffect(() => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, orderBy("lastUpdatedAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setChats(querySnapshot.docs.map((doc) => console.log(doc.data())));
    });

    return () => unsubscribe();
  }, []);

  return (
    <Row tag="section">
      <Col width={{ xs: 12, md: 4 }}>
        <section className={styles.chats}>123</section>
      </Col>
      <Col width={{ xs: 12, md: 8 }}>2</Col>
    </Row>
  );
};

export default Messages;
