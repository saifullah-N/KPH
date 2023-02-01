// import React, { useState } from 'react';

// import ReactDOM from 'react-dom';
// import 'handsontable/dist/handsontable.full.min.css';
// import { HotTable ,HotColumn } from '@handsontable/react';
// import data  from './data';
// const App  =()=>{
    
//     // const [data,setData] = useState([
//     //  data
//     // ])
//     return (
//       <div style={{"text-align":'center'}}>
//     <HotTable data={data} 
//     colHeaders={[
//         "Company name",
//         "Country",
//         "Name",
//         "Sell date",
//         "Order ID",
//         "In stock",
//         "Qty",
//         "Progress",
//         "Rating"
//       ]}
//     colWidths={[150, 150, 150, 150, 150, 150, 150, 150, 150]} 
//     columnSorting
//      licenseKey="non-commercial-and-evaluation"
//      dropdownMenu={true}
//      minSpareRows={1}>
//       {/* <HotColumn readOnly data={1} style={{"color":"red"}} />
//       <HotColumn data={2} />
//       <HotColumn data={3} />
//       <HotColumn data={4}  allowInvalid={true} />
//       <HotColumn data={5} /> */}
//       {
//         data.map((a,i)=>{
//           if(i!=3)<HotColumn data={a}/>
//         })
//       }
//      </HotTable>
//      </div>
//     );
//   }
// export default App
import React from "react";
import ReactDOM from "react-dom";
import "pikaday/css/pikaday.css";
import "./App.css";
import { HotTable, HotColumn } from "@handsontable/react";
import { data } from "./data";
import { ProgressBarRenderer } from "./renderers/ProgressBar";
// import { StarsRenderer } from "./renderers/Stars";
// import { readCSV, DataFrame } from "danfojs"
// import * as dfd from "danfojs"

import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders
} from "./hooksCallbacks";

import "handsontable/dist/handsontable.min.css";
const App = () => {
  // let x = dfd.readCSV("./assets/MOCK_DATA.csv")
  console.log(data)
  return (
    <div>
    <nav> 
      <input type="text" />
    </nav>
    <HotTable
      data={data}
      // height={450}
      colWidths={[140, 140, 140, 140, 140, 140,140,140,140,100,]}
      colHeaders={data[0]}
      dropdownMenu={true}
      hiddenColumns={{
        indicators: true
      }}
      contextMenu={true}
      multiColumnSorting={true}
      rowHeaders={true}
      filters={true}
      afterGetColHeader={alignHeaders}
      beforeRenderer={addClassesToRows}
      afterGetRowHeader={drawCheckboxInRowHeaders}
      afterOnCellMouseDown={changeCheckboxCell}
      manualRowMove={true}
      licenseKey="non-commercial-and-evaluation"
    >
      {/* <HotColumn data={1} /> */}
      {data.map((d,i)=>{ return i==0 ? <HotColumn data={i+1} /> : <HotColumn data={i}/>})}
      {/* <HotColumn data={2} /> */}
      {/* <HotColumn data={3} /> */}
      {/* <HotColumn data={4} type="date" allowInvalid={false} /> */}
      {/* <HotColumn data={5} /> */}
      {/* <HotColumn data={6} type="checkbox" className="htCenter" /> */}
      {/* <HotColumn data={7} type="numeric" /> */}
      {/* <HotColumn data={8} readOnly={true} className="htMiddle"> */}
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        {/* <ProgressBarRenderer hot-renderer /> */}
      {/* </HotColumn> */}
      {/* <HotColumn data={9} readOnly={true} className="htCenter"> */}
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        {/* <StarsRenderer hot-renderer /> */}
      {/* </HotColumn> */}
    </HotTable>
    </div>
  );
};

export default App;