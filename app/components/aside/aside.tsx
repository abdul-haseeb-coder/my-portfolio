import Link from "next/link";
import {
  MapPin,
  Mail,
  PhoneCall,
  Instagram,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import Image from "next/image";

const Aside = () => {
  return (
    <aside>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/my-avatar.png"
            alt="Richard hanrick"
            width="80"
            height="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Richard hanrick
          </h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneCall />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <Link href="tel:+923274299852" className="contact-link">
                +92 (327) 429-9852
              </Link>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarDays />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              {/* <time datetime="1982-06-23">June 23, 1982</time> */}
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link href="#" className="social-link">
              <Instagram />
            </Link>
          </li>

          <li className="social-item">
            <Link href="#" className="social-link">
              <Instagram />
            </Link>
          </li>

          <li className="social-item">
            <Link href="#" className="social-link">
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
