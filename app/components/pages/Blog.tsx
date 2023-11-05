import Image from "next/image";

type Blogs = {
  title: string;
  banner: string;
  href: string;
  heading: string;
  content: string;
};
const blogsData: Blogs[] = [
  {
    title: "Web Development Trends in 2023",
    banner: "/web-development-trends.jpg",
    heading: "Stay Up-to-Date with the Latest Trends",
    content:
      "Learn about the emerging trends and technologies in web development for 2023. Discover how to keep your web projects current and appealing to your audience.",
    href: "https://example.com/web-development-trends-2023",
  },
  {
    title: "Mastering Responsive Web Design",
    banner: "/responsive-web-design.jpg",
    heading: "Creating Beautiful Websites for All Devices",
    content:
      "Explore the principles and techniques for creating responsive web designs that adapt seamlessly to various screen sizes. Ensure your websites look great on desktops, tablets, and mobile devices.",
    href: "https://example.com/mastering-responsive-web-design",
  },
  {
    title: "JavaScript Frameworks Comparison",
    banner: "/javascript-frameworks.jpg",
    heading: "Choosing the Right Framework for Your Project",
    content:
      "An in-depth comparison of popular JavaScript frameworks like React, Angular, and Vue.js. Find out which one suits your web development project best.",
    href: "https://example.com/javascript-frameworks-comparison",
  },
  {
    title: "Optimizing Website Performance",
    banner: "/website-performance.jpg",
    heading: "Speed Up Your Website with Performance Optimization",
    content:
      "Discover tips and best practices for optimizing your website's performance. Improve page load times, enhance user experience, and boost your SEO rankings.",
    href: "https://example.com/optimizing-website-performance",
  },
  {
    title: "Web Security Best Practices",
    banner: "/web-security.jpg",
    heading: "Protecting Your Web Applications from Threats",
    content:
      "Learn essential security practices to safeguard your web applications from common vulnerabilities. Explore techniques for preventing data breaches and attacks.",
    href: "https://example.com/web-security-best-practices",
  },
  {
    title: "Creating Progressive Web Apps (PWAs)",
    banner: "/progressive-web-apps.jpg",
    heading: "Building Offline-Ready Web Applications",
    content:
      "Step-by-step guide on developing Progressive Web Apps (PWAs) that work seamlessly online and offline. Enhance user engagement and retention with this modern approach.",
    href: "https://example.com/creating-progressive-web-apps",
  },
  {
    title: "Front-End Development Tools You Should Know",
    banner: "/front-end-dev-tools.jpg",
    heading: "Boost Your Front-End Development Workflow",
    content:
      "Explore a collection of front-end development tools and utilities that can streamline your coding process. Discover tools for debugging, testing, and more.",
    href: "https://example.com/front-end-dev-tools",
  },
  {
    title: "Backend Development with Node.js",
    banner: "/nodejs-backend.jpg",
    heading: "Creating Robust Backends with Node.js",
    content:
      "Learn how to build powerful backend services using Node.js. Explore frameworks, APIs, and best practices for creating scalable and efficient server-side applications.",
    href: "https://example.com/backend-development-nodejs",
  },
  {
    title: "Scalable Web Architecture Design",
    banner: "/web-architecture.jpg",
    heading: "Architecting Web Applications for Scalability",
    content:
      "Designing web architectures that can handle increased traffic and user loads. Explore strategies for scaling your web applications horizontally and vertically.",
    href: "https://example.com/scalable-web-architecture",
  },
  {
    title: "Web Development Best Practices for SEO",
    banner: "/seo-web-development.jpg",
    heading: "Boosting Your Website's Search Engine Ranking",
    content:
      "Optimizing your web development workflow for improved SEO. Learn techniques for better on-page SEO, meta tags, and content optimization.",
    href: "https://example.com/web-development-best-practices-seo",
  },
  // Add more blog entries as needed
];

const Blog = () => {
  return (
    <div>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogsData.map((blog, index) => (
            <li className="blog-post-item" key={index}>
              <a href={blog.href}>
                <figure className="blog-banner-box">
                  <Image
                    width={100} // Placeholder width
                    height={100}
                    src={blog.banner}
                    alt={blog.title}
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.title}</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">{blog.heading}</h3>

                  <p className="blog-text">{blog.content}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Blog;
