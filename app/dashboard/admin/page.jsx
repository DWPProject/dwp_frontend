"use client";
import PageHeading from "@/app/components/PageHeading";

import { useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function AdminDashboard() {
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <PageHeading title="Overview" />
      <Bar
        ref={chartRef}
        onClick={onClick}
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  );
}
