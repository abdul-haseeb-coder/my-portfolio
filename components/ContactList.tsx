import React from "react";
import Image from "next/image";
import Link from "next/link";
import contacts from "@/db/contacts.json";

const ContactsList = () => (
  <ul className="contacts-list">
    {contacts.map((contact, index) => (
      <li className="contact-item" key={index}>
        <div className="icon-box">
          <Image src={contact.icon} alt={contact.alt} width="30" height="30" />
        </div>
        <div className="contact-info">
          <p className="contact-title">{contact.type}</p>
          {contact.link ? (
            <Link href={contact.link.href} className="contact-link">
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
