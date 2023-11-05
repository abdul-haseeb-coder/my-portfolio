import { PageKey } from "./Navigation"; // Import PageKey from the source where it's defined

const NavItem: React.FC<{
  label: string;
  page: PageKey;
  active: boolean;
  onNavLinkClick: (page: PageKey) => void;
}> = ({ label, page, active, onNavLinkClick }) => (
  <li className="navbar-item">
    <button
      className={`navbar-link ${active ? "active" : ""}`}
      data-nav-link
      onClick={() => onNavLinkClick(page)}
    >
      {label}
    </button>
  </li>
);

export default NavItem;
