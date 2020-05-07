import React from "react";
import PrayerCard from "./PrayerCard";
import NewRequest from './NewRequest.js'

const PrayerList = (props) => {
  const { prayerData } = props;
  console.log("prayerData", prayerData);
  return (
    <div>
      {/* <NewRequest/> */}
      {prayerData &&
        prayerData.map((prayer, index) => (
          <PrayerCard key={index} prayer={prayer} />
        ))}
    </div>
  );
};

export default PrayerList;
