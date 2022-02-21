import React, { useState } from "react";
import moment from "moment";
import {
  DateRangePicker,
  defaultStaticRanges,
  createStaticRanges
} from "react-date-range";
// import { useTheme } from "@material-ui/core/styles";
import "../../../node_modules/react-date-range/dist/styles.css"; // main style file 
import "../../../node_modules/react-date-range/dist/theme/default.css" // theme css file

function DatePicker() {
//   const theme = useTheme();
  const [ranges, setRanges] = useState([
    {
      startDate: null,
      endDate: null,
      key: "rollup"
    }
  ]);

  const staticRanges = createStaticRanges([
    ...defaultStaticRanges,
    {
      label: "This Year",
      range: () => ({
        startDate: moment().startOf("year").toDate(),
        endDate: moment().endOf("day").toDate()
      })
    },
    {
      label: "Last Year",
      range: () => ({
        startDate: moment().subtract(1, "years").startOf("year").toDate(),
        endDate: moment().subtract(1, "years").endOf("year").toDate()
      })
    }
  ]);
  console.log(ranges);
  return (
    <DateRangePicker
      startDatePlaceholder="Start Date"
      endDatePlaceholder="End Date"
    //  rangeColors={[theme.palette.primary.main]}
      ranges={ranges}
      onChange={(ranges) => setRanges([ranges.rollup])}
      staticRanges={staticRanges}
      inputRanges={[]}
    />
  );
}

export default DatePicker;
