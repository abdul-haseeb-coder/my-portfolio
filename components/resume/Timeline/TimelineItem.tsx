import React from "react";
import styles from "./TimelineItem.module.css";

type TimelineItemProps = {
  title: string;
  dateRange: string;
  description: string;
};

const TimelineItem = ({ title, dateRange, description }: TimelineItemProps) => (
  <li className={styles.timelineItem}>
    <h4 className={`h4 ${styles.timelineItemTitle}`}>{title}</h4>
    <span>{dateRange}</span>
    <p className={styles.timelineText}>{description}</p>
  </li>
);

export default TimelineItem;
