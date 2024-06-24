import Link from "next/link";
import styles from "./SocialLink.module.css";
interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <li className={styles.socialItem}>
      <Link
        href={href}
        className={`${styles.socialLink} ${styles.socialLinkBox}`}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  );
};

export default SocialLink;
