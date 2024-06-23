import React from "react";
import SocialLink from "./SocialLink"; // Adjust the path as necessary
import Image from "next/image"; // or the appropriate import for your Image component
import socialLinks from "@/db/socialLinks.json"; // Adjust the path to your JSON file
import styles from "./SocialList.module.css";

const SocialList = () => (
  <ul className={styles.socialList}>
    {socialLinks.map((link, index) => (
      <li key={index}>
        <SocialLink href={link.href}>
          <Image src={link.src} alt={link.alt} width="20" height="20" />
        </SocialLink>
      </li>
    ))}
  </ul>
);

export default SocialList;
