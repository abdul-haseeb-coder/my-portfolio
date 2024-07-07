import Image from "next/image";
import Link from "next/link";

import styles from "./Clients.module.css";

const Clients = () => {
  const logoNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.clients}>
      <h3 className={`h3 ${styles.clientsTitle}`}>Clients</h3>

      <ul className={`has-scrollbar ${styles.clientsList}`}>
        {logoNumbers.map((number, index) => (
          <li key={index} className={styles.clientsItem}>
            <Link href="#">
              <Image
                src={`/images/logo-${number}-color.png`}
                height={100}
                width={150}
                alt={`client logo ${number}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
