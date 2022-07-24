import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import {Chart as ChartJS} from 'chart.js/auto';

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
