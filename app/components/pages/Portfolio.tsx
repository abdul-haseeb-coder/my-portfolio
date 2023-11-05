import React from "react";
import Image from "next/image";
import { Eye, ChevronDown } from "lucide-react";
const Portfolio = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ChevronDown />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-1.jpg"
                  width={100} // Placeholder width
                  height={100}
                  alt="finance"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-2.png"
                  alt="orizon"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-3.jpg"
                  alt="fundo"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-4.png"
                  alt="brawlhalla"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-5.png"
                  alt="dsm."
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-6.png"
                  alt="metaspark"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-7.png"
                  alt="summary"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-8.jpg"
                  alt="task manager"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye />
                </div>

                <Image
                  src="/project-9.png"
                  alt="arrival"
                  loading="lazy"
                  width={100} // Placeholder width
                  height={100}
                />
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
