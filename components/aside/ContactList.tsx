import React from "react";
import Image from "next/image";
import Link from "next/link";
import contacts from "@/db/contacts.json";
import styles from "./ContactList.module.css";

const ContactsList = () => (
  <ul className={styles.contactsList}>
    {contacts.map((contact, index) => (
      <li className={styles.contactItem} key={index}>
        <div className={styles.iconBox}>
          <Image className={styles.iconBoxImg} src={contact.icon} alt={contact.alt} width="30" height="30" />
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.contactTitle}>{contact.type}</p>
          {contact.link ? (
            <Link href={contact.link.href} className={styles.contactLink}>
              {contact.link.text}
            </Link>
          ) : contact.dateTime ? (
            <time dateTime={contact.dateTime}>{contact.text}</time>
          ) : (
            <address>{contact.address}</address>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default ContactsList;
