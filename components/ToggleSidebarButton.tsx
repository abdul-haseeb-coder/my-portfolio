// components/ToggleSidebarButton.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const ToggleSidebarButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
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

        <button
          className="info_more-btn"
          onClick={handleToggle}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <Image src="/" alt="Toggle Sidebar" width="80" height="80" />
        </button>
      </div>

      {isActive && (
        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <Image
                  src="/mail.svg"
                  alt="Email"
                  width="80"
                  height="80"
                />
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>
                <Link href="mailto:abdulhaseebcoder@gmail.com" className="contact-link">
                  abdulhaseebonline@gmail.com
                </Link>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <Image
                  src="/phone-call.svg"
                  alt="Phone"
                  width="80"
                  height="80"
                />
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
                <Image
                  src="/calendar-days.svg"
                  alt="Birthday"
                  width="80"
                  height="80"
                />
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2003-10-12">October 12, 2003</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <Image
                  src="/mappin.svg"
                  alt="Location"
                  width="80"
                  height="80"
                />
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>FSD, Punjab, Pakistan</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <SocialLink
              href="https://www.upwork.com/freelancers/~017890f8a3624ddf25"
              iconstyles={{ color: "#108600" }}
            >
              <Image
                src="/upwork.svg"
                alt="Upwork"
                width="80"
                height="80"
              />
            </SocialLink>

            <SocialLink
              href="https://twitter.com/CoderAbdul165"
              iconstyles={{ color: "#0C72B7" }}
            >
              <Image
                src="/x-twitter-normal.svg"
                alt="Twitter"
                width="80"
                height="80"
              />
            </SocialLink>

            <SocialLink
              href="https://github.com/Abdull-Haseeb"
              iconstyles={{ color: "#101000" }}
            >
              <Image
                src="/github-2.svg"
                alt="GitHub"
                width="80"
                height="80"
              />
            </SocialLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleSidebarButton;
