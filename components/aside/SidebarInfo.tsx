import React from "react";
import ContactsList from "./ContactList";
import SocialList from "./SocialList";
import styles from "./SidebarInfo.module.css";

export default function SidebarInfo() {
  return (
    <>
      <div className={styles.separator}></div>
      <ContactsList />
      <div className={styles.separator}></div>
      <SocialList />
    </>
  );
}
