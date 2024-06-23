
"use client";

import { ReactNode, useState } from "react";

interface SidebarToggleProps {
  children: ReactNode;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button
        className="info_more-btn"
        onClick={toggleSidebar}
        data-sidebar-btn
      >
        <span>Show Contacts</span>
      </button>
      <div className={`sidebar-info_more ${isActive ? "active" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default SidebarToggle;
