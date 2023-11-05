import { useState } from "react";

import Page from "./Page";
import NavItem from "./NavItem";
import Resume from "./pages/Resume";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export type PageKey = "about" | "resume" | "portfolio" | "blog" | "contact";
const Navigation: React.FC = () => {
  const [activePage, setActivePage] = useState<PageKey>("about"); 
  // Initialize with "about" or the default active page

  const handleNavLinkClick = (page: PageKey) => {
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
  const pages: Record<PageKey, JSX.Element> = {
    about: (
      <Page page="about" activePage={activePage}>
        <About />
      </Page>
    ),
    resume: (
      <Page page="resume" activePage={activePage}>
        <Resume />
      </Page>
    ),
    portfolio: (
      <Page page="portfolio" activePage={activePage}>
        <Portfolio />
      </Page>
    ),
    blog: (
      <Page page="blog" activePage={activePage}>
        <Blog />
      </Page>
    ),
    contact: (
      <Page page="contact" activePage={activePage}>
        <Contact />
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
              page={navItem.page as PageKey}
              active={activePage === navItem.page}
              onNavLinkClick={handleNavLinkClick}
            />
          ))}
        </ul>
      </nav>

      {pages[activePage]}
    </div>
  );
};

export default Navigation;
