import Link from "next/link";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <li className="social-item">
      <Link href={href} className="social-link social-link-box" target="_blank">
        {children}
      </Link>
    </li>
  );
};

export default SocialLink;
