import React, { FC } from "react";
import styles from "./DocumentCard.module.scss";
import { ReactComponent as PDFSvg } from "../../assets/images/icons/file-pdf.svg";
import { ReactComponent as DOCSvg } from "../../assets/images/icons/file-doc.svg";
import { ReactComponent as DownloadSvg } from "../../assets/images/icons/download.svg";
import { bytesToSize } from "../../utils";
import IconButton from "../common/IconButton";

interface IProps {
  name: string;
  size: number;
  type: string;
  downloadUrl: string;
}

const DocumentCard: FC<IProps> = ({ name, size, type, downloadUrl }) => {
  const renderIcon = () => {
    if (type === "pdf") {
      return <PDFSvg />;
    }
    if (type === "doc" || type === "docx") {
      return <DOCSvg />;
    }
    return <PDFSvg />;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{renderIcon()}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.footer}>
        <div className={styles.fileSize}>Size: {bytesToSize(size)}</div>
        <IconButton href={downloadUrl} icon={<DownloadSvg />} target="_blank" />
      </div>
    </div>
  );
};

export default DocumentCard;
