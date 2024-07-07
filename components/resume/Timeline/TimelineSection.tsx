import React from "react";
import TimelineItem from "./TimelineItem";
import { Book } from "lucide-react";
import styles from "./TimelineSection.module.css";
type TimelineSectionProps = {
  title: string;
  items: Array<{ title: string; dateRange: string; description: string }>;
};
const TimelineSection = ({ title, items }: TimelineSectionProps) => (
  <section className={styles.timeline}>
    <div className={styles.titleWrapper}>
      <div className={styles.iconBox}>
        <Book />
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className={styles.timelineList}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          dateRange={item.dateRange}
          description={item.description}
        />
      ))}
    </ol>
  </section>
);

export default TimelineSection;
