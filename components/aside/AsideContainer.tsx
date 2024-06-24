"use client";
import React from "react";
import styles from "./AsideContainer.module.css";
import { useState } from "react";
import AvatarInfo from "./Avatar&Info";
import Image from "next/image";

interface AsideContainerProps {
  children: React.ReactNode;
}
const AsideContainer: React.FC<AsideContainerProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <aside className={`${styles.sidebar} ${isActive ? styles.active : ""}`}>
      <div className={styles.sidebarInfo}>
        <AvatarInfo />
        <button className={styles.infoMoreBtn} onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <Image
            className={styles.img}
            src="/chevrondown.svg"
            alt="toggle-btn"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={styles.sidebarInfoMore}>{children}</div>
    </aside>
  );
};

export default AsideContainer;
