import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
// import * as d3 from 'd3'
// ?   
/**************************
data = [
      {
        date: date
        total: total time of call
        details:[
          {
          name: "to",
          date: "2016-01-01 12:30:45",
          value: msg duration,
        }
        ]
      }
]

******************************* */
import calenderHeatMap from "./calendar-heatmap";
let obj = document.querySelector('#app')
//  = setupCounter(document.querySelector('#counter'))
  var data = [
    // {"summary":"bruh"},
    {
      date: "2016-01-01",
      total: 17164,
      details: [
        {
          name: "Project 1",
          date: "2016-01-01 12:30:45",
          value: 9192,
        },
        {
          name: "Project 2",
          date: "2016-01-01 13:37:00",
          value: 6753,
        },
        {
          name: "Project N",
          date: "2017-01-01 17:52:41",
          value: 1219,
        },
      ],
    },
    {
      date: "2016-03-01",
      total: 17164,
      details: [
        {
          name: "Project 1",
          date: "2016-01-02 12:30:45",
          value: 9192,
        },
        {
          name: "Project 2",
          date: "2016-01-21 13:37:00",
          value: 6753,
        },
        {
          name: "Project N",
          date: "2016-21-01 17:52:41",
          value: 1219,
        },
      ],
    },
  ];
 var print = (val)=>{
  console.log(val);
}
calenderHeatMap.init(data, "app", "#2fa55e", "month",print);