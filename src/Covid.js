import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [record, setRecord] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const realTimeData = await res.json();
      setRecord(realTimeData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>
          <span>🔴</span> Live
        </h1>
        <h2>Covid-19 Tracker</h2>

        <ul>
          <li className="card country">
            <div className="">
              <p className="card_name">
                <span>OUR</span> COUNTRY
              </p>
              <p className="card_total">India</p>
            </div>
          </li>

          <li className="card recovered">
            <div className="">
              <p className="card_name">
                <span>TOTAL</span> RECOVERED
              </p>
              <p className="card_total">{record.recovered}</p>
            </div>
          </li>

          <li className="card confirmed">
            <div className="">
              <p className="card_name">
                <span>TOTAl</span> CONFIRMED
              </p>
              <p className="card_total">India</p>
            </div>
          </li>

          <li className="card death">
            <div className="">
              <p className="card_name">
                <span>TOTAL</span> DEATH
              </p>
              <p className="card_total">India</p>
            </div>
          </li>

          <li className="card active">
            <div className="">
              <p className="card_name">
                <span>TOTAL</span> ACTIVE
              </p>
              <p className="card_total">India</p>
            </div>
          </li>

          <li className="card updated">
            <div className="">
              <p className="card_name">
                <span>LAST</span> UPDATED
              </p>
              <p className="card_total">India</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
