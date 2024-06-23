// Aside.tsx
import Image from "next/image";
import SidebarToggle from "../SidebarToggle";
import ContactsList from "../ContactList";
import SocialList from "../SocialList";

const Aside: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/coderabdul.jpg"
            alt="Abdul Haseeb"
            width="80"
            height="80"
            unoptimized
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Abdul Haseeb">
            Abdul Haseeb
          </h1>

          <p className="title">Full Stack Developer</p>
        </div>

        <SidebarToggle>
          <div className="separator"></div>
          <ContactsList />
          <div className="separator"></div>
          <SocialList />
        </SidebarToggle>
      </div>
    </aside>
  );
};

export default Aside;
