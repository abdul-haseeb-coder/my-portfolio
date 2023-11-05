import { useState } from "react";
import Page from "./Page";
import NavItem from "./NavItem";
import Resume from "./pages/Resume";
const Navigation: React.FC = () => {
  const [activePage, setActivePage] = useState("about"); // Initialize with "about" or the default active page

  const handleNavLinkClick = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };
  const navItemsData = [
    { label: "About", page: "about" },
    { label: "Resume", page: "resume" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" },
  ];
  const pages = {
    about: (
      <Page page="about" activePage={activePage}>
        About Page Content
      </Page>
    ),
    resume: (
      <Page page="resume" activePage={activePage}>
        <Resume />
      </Page>
    ),
    portfolio: (
      <Page page="portfolio" activePage={activePage}>
        Portfolio Page Content
      </Page>
    ),
    blog: (
      <Page page="blog" activePage={activePage}>
        Blog Page Content
      </Page>
    ),
    contact: (
      <Page page="contact" activePage={activePage}>
        Contact Page Content
      </Page>
    ),
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          {navItemsData.map((navItem) => (
            <NavItem
              key={navItem.page}
              label={navItem.label}
              page={navItem.page}
              active={activePage === navItem.page}
              onNavLinkClick={handleNavLinkClick}
            />
          ))}
        </ul>
      </nav>
      {pages[activePage]}
      {/* Define additional Page components for other sections */}
    </div>
  );
};

export default Navigation;
