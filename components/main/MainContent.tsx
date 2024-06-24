import React from "react";
import Navbar from "./Navbar";
import styles from "./MainContent.module.css";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.mainContent}>
      <Navbar />
      {children}
    </div>
  );
}
