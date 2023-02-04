import React from 'react'
import { HotTable, HotColumn } from "@handsontable/react";
import { ProgressBarRenderer } from "./renderers/ProgressBar";
import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders,
} from "./hooksCallbacks";
import { data } from "./data";
import "handsontable/dist/handsontable.full.css";


function TableCsv() {

  return (
    <HotTable
      data={data}
      // height={450}
      colWidths={[140, 140, 140, 140, 140, 140, 140, 140, 140, 200]}
      // width={window.outerWidth}
      // rowHeights={[40, 40, 40, 40, 40, 40,40, 40, 40,40]}
      colHeaders={data[0]}
      dropdownMenu={true}
      hiddenColumns={{
        indicators: true,
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

      {data[0].map((d, i) => {
        <HotColumn data={i} />;
      })}
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
  );
}

export default TableCsv