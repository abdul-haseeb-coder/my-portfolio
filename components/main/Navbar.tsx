"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    router.push(href);
  };

  const navLinks = [
    { href: "/", label: "About" }, // Default path is '/' for About
    { href: "/resume", label: "Resume" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.navbarItem}>
            <Link
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`${styles.navbarLink} ${
                router.asPath === link.href ||
                (router.asPath === "/" && link.href === "/about")
                  ? styles.active
                  : ""
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
