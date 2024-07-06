"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "About" }, // Default path is '/' for About
    { href: "/resume", label: "Resume" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const path = usePathname();
  console.log(path);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.navbarItem}>
            <Link
              href={link.href}
              className={`${styles.navbarLink} ${
                path === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
