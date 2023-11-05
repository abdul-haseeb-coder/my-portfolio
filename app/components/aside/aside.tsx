"use client";
import Link from "next/link";
import { TbBrandUpwork } from "react-icons/tb";
import {
  Github,
  MapPin,
  Mail,
  PhoneCall,
  Instagram,
  CalendarDays,
  ChevronDown,
  Twitter,
} from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import SocialItem from "./../SocialItem";

const Aside = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/coderabdul.jpg"
            alt="Abdul Haseeb"
            width="80"
            height="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Abdull Haseeb
          </h1>

          <p className="title">Web developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={toggleSidebar}
          data-sidebar-btn
        >
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

              <Link
                href="mailto:
                abdulhaseebcoder@gmail.com"
                className="contact-link"
              >
                abdulhaseebcoder@gmail.com
              </Link>
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
              <time dateTime="2003-10-12">October 12, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>FSD, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <SocialItem
            href="https://www.upwork.com/freelancers/~017890f8a3624ddf25"
            iconstyles={{ color: "#108600" }}
          >
            <TbBrandUpwork />
          </SocialItem>

          <SocialItem
            href="https://twitter.com/CoderAbdul165"
            iconstyles={{ color: "#0C72B7" }}
          >
            <Twitter />
          </SocialItem>

          <SocialItem
            href="https://github.com/Abdull-Haseeb"
            iconstyles={{ color: "#101000" }}
          >
            <Github />
          </SocialItem>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
