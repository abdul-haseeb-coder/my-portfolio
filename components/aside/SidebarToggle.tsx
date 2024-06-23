"use client";

import { ReactNode, useState } from "react";
import styles from "./SidebarToggle.module.css";
interface SidebarToggleProps {
  children: ReactNode;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button className={styles.info_moreBtn} onClick={toggleSidebar}>
        <span>Show Contacts</span>
      </button>
      <div
        className={`${styles.sidebarInfoMore} ${isActive ? styles.active : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default SidebarToggle;
