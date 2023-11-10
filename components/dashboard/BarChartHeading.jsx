import { useState } from "react";

import Select from "../elements/Select";

const BarChartHeading = ({ totalPendapatan }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [minOffset, maxOffset] = [0, 60];
  const valueOption = [];

  for (let i = minOffset; i <= maxOffset; i++) {
    valueOption.push({
      value: year - i,
      label: year - i,
    });
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Total Pendapatan</h1>
        <p>Rp. {totalPendapatan}</p>
      </div>
      <div>
        <Select
          className="w-full bg-[#FFF8E5] text-[#FFC029]"
          selectedValue={year}
          valueOption={valueOption}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BarChartHeading;
