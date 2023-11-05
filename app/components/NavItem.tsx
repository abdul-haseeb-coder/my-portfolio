const NavItem: React.FC<{
  label: string;
  page: string;
  active: boolean;
  onNavLinkClick: (page: string) => void;
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
