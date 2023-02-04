import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import CalendarHeatmap from "reactjs-calendar-heatmap";
import { data } from "./data";
// [['A','B','DATE','TIME','DURATION','FIRST CELL ID','LAST CELL ID','IMEI A','IMSI A','A ADDRESS']]

function Heatmapph() {
  let [fdata, setfData] = useState(
  [
    {
      date: "2016-01-01",
      total: 17164,
      details: [
        {
          name: "Project 1",
          date: "2016-01-01 12:30:45",
                  value: 9192,
        },     ]
      }
    ]   
      );
  function formatData(phno) {
    let prepData = [{}],
      details = [],
      total = 0,
      date = " ";
    // console.log("inga than", data);
    data.forEach((a) => {
      if (a.includes("Rasia")) {
        console.log("yg", a);
        prepData.forEach((i) => {
          if (i["date"] == a[2]) {
            i[total] += a[4];
            i[details].push({
              name: a[1],
              date: a[2] + " " + a[3],
              value: a[4],
            });
          } else {
            prepData.push({
              date: a[2],
              total: a[4],
              details: [
                {
                  name: a[1],
                  date: a[2] + " " + a[3],
                  value: a[4],
                },
              ],
            });
          }
        });
      }

    });
    delete prepData[0]
    setfData(prepData.filter((a)=>(!!a)))
    console.log(fdata);
  }
  //  var data = [
  //   // {"summary":"bruh"},
  //   {
  //     date: "2016-01-01",
  //     total: 17164,
  //     details: [
  //       {
  //         name: "Project 1",
  //         date: "2016-01-01 12:30:45",
  //         value: 9192,
  //       },
  //       {
  //         name: "Project 2",
  //         date: "2016-01-01 13:37:00",
  //         value: 6753,
  //       },
  //       {
  //         name: "Project N",
  //         date: "2017-01-01 17:52:41",
  //         value: 1219,
  //       },
  //     ],
  //   },
  //   {
  //     date: "2016-03-01",
  //     total: 17164,
  //     details: [
  //       {
  //         name: "Project 1",
  //         date: "2016-01-02 12:30:45",
  //         value: 9192,
  //       },
  //       {
  //         name: "Project 2",
  //         date: "2016-01-21 13:37:00",
  //         value: 6753,
  //       },
  //       {
  //         name: "Project N",
  //         date: "2016-21-01 17:52:41",
  //         value: 1219,
  //       },
  //     ],
  //   },
  // ];
  // let now = moment().endOf("day").toDate();
  // let time_ago = moment().startOf("day").subtract(10, "year").toDate();
  // let dummy = d3.timeDays(time_ago, now).map(function (dateElement, index) {
  //   return {
  //     date: dateElement,
  //     details: Array.apply(null, new Array(Math.floor(Math.random() * 15))).map(
  //       function (e, i, arr) {
  //         return {
  //           name: "Project " + Math.ceil(Math.random() * 10),
  //           date: (function () {
  //             let projectDate = new Date(dateElement.getTime());
  //             projectDate.setHours(Math.floor(Math.random() * 24));
  //             projectDate.setMinutes(Math.floor(Math.random() * 60));
  //             return projectDate;
  //           })(),
  //           value:
  //             3600 * ((arr.length - i) / 5) +
  //             Math.floor(Math.random() * 3600) *
  //               Math.round(Math.random() * (index / 365)),
  //         };
  //       }
  //     ),
  //     init: function () {
  //       this.total = this.details.reduce(function (prev, e) {
  //         return prev + e.value;
  //       }, 0);
  //       return this;
  //     },
  //   }.init();
  // });

  return (
    <div>
      <CalendarHeatmap
        data={fdata}
        color={'#1976d2'}
        overview={"global"}
      />
      <button onClick={()=>formatData()} >kk</button>
      {/* {formatData()} */}
    </div>
  );
}

export default Heatmapph;
