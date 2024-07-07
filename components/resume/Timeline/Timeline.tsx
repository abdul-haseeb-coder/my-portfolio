import React from "react";
import TimelineSection from "./TimelineSection";
import education from "@/db/education.json";
import experience from "@/db/experience.json";

const Timeline = () => (
  <div>
    <TimelineSection title="Education" items={education} />
    <TimelineSection title="Experience" items={experience} />
  </div>
);

export default Timeline;
