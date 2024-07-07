import React from "react";
import styles from "./HeaderTitle.module.css";
type Props = {
  children: React.ReactNode;
};

const HeaderTitle: React.FC<Props> = ({ children }) => {
  return (
    <header>
      <h2 className={`h2 ${styles.articleTitle}`}>{children}</h2>
    </header>
  );
};

export default HeaderTitle;
