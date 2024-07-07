import Image from "next/image";
import services from "@/db/services.json";
import styles from "./Services.module.css";

type ServiceType = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

const Services = () => {
  return (
    <section className={styles.service}>
      <h3 className={`h3 ${styles.serviceTitle}`}>What I am doing</h3>
      <ul className={styles.serviceList}>
        {services.map((service: ServiceType, index: number) => (
          <li className={styles.serviceItem} key={index}>
            <div className={styles.serviceIconBox}>
              <Image
                src={service.img}
                alt={service.alt}
                width="40"
                height="40"
              />
            </div>

            <div className={styles.serviceContentBox}>
              <h4 className={`h4 ${styles.serviceItemTitle}`}>
                {service.title}
              </h4>

              <p className={styles.serviceItemText}>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
