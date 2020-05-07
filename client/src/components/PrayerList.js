import React from "react";
import PrayerCard from "./PrayerCard";

const PrayerList = (props) => {
  const { prayerData } = props;
  console.log("prayerData", prayerData);
  return (
    <div>
      {prayerData &&
        prayerData.map((prayer, index) => (
          <PrayerCard key={index} prayer={prayer} />
        ))}
    </div>
  );
};

export default PrayerList;
