import Image from "next/image";
import React from "react";
import styles from "./Avatar&Info.module.css";
export default function AvatarInfo() {
  return (
    <>
      <figure className={styles.avatarBox}>
        <Image
          className={styles.avatar}
          src="/profile.png"
          alt="Abdul Haseeb"
          width={80}
          height={80}
          unoptimized
        />
      </figure>

      <div className={styles.infoContent}>
        <h1 className={styles.name} title="Abdul Haseeb">
          Abdul Haseeb
        </h1>

        <p className={styles.title}>Full Stack Developer</p>
      </div>
    </>
  );
}
