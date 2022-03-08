import Chart from "react-apexcharts";

const OtherGraphs = () => {
  return (
    <>
      <Chart
        type="bar"
        width={800}
        height={600}
        series={[
          {
            data: [0, 100, 0],
          },
        ]}
        options={{
          chart: {
            type: "bar",
            events: {
              click: function (chart, e) {},
            },
          },
          colors: ["#4169E1", "#66C7F4"],
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
              endingShape: "rounded",
              borderRadius: 62,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: ["Jan", "Feb", "March"],
            labels: {
              style: {
                colors: ["#000000"],
                fontSize: "12px",
              },
            },
          },
        }}
      ></Chart>

      <Chart
        type="bar"
        width={600}
        height={400}
        series={[
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
        ]}
        options={{
          chart: {
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands";
              },
            },
          },
        }}
      ></Chart>
      <Chart
        type="bar"
        width={600}
        height={400}
        series={[
          {
            name: "Net Profit",
            data: [0, 0, 0, 0, 44, 0, 0, 0, 0],
          },
          {
            name: "Revenue",
            data: [0, 0, 0, 0, 56, 0, 0, 0, 0],
          },
        ]}
        options={{
          chart: {
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              columnWidth: "100%",
              distributed: false,
            },
            // bar: {
            //   columnWidth: '100%',
            //   distributed : false,
            //   endingShape : "rounded"
            // },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands";
              },
            },
          },
        }}
      ></Chart>
    </>
  );
};

export default OtherGraphs;
