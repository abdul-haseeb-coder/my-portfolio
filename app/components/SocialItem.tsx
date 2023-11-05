import Link from "next/link";

interface SocialItemProps {
  href: string;
  children: React.ReactNode;
  iconstyles: React.CSSProperties;
}
const SocialItem: React.FC<SocialItemProps> = ({
  href,
  children,
  iconstyles,
}) => {
  return (
    <li className="social-item">
      <Link
        href={href}
        className="social-link social-link-box"
        style={iconstyles}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  );
};

export default SocialItem;
