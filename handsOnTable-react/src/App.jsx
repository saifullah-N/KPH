import React ,{useEffect , useState} from "react";
import "pikaday/css/pikaday.css";
import "./App.css";
import { data } from "./data";
import Navbar from "./renderers/Navbar";
import Heatmapph from './Heatmapph'
import 'handsontable/dist/handsontable.full.css';
import TableCsv from "./TableCsv";
import MuiNavbar from './MuiNavbar'
import axios from "axios";
const App = () => {
  const [csvData, setCsvData] = useState("");
  const [searchKey, setsearchKey] = useState("");
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        "https://1442-103-156-19-229.in.ngrok.io/api/get_dump/?case_num=1234",
      )
      // fetch(url, {
      //   method: "get",
      //   headers: new Headers({
      //     "ngrok-skip-browser-warning": "69420",
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
      setCsvData(response.data)
    }
    let x = [
      [
        "A",
        "B",
        "DATE",
        "TIME",
        "DURATION",
        "FIRST CELL ID",
        "LAST CELL ID",
        "IMEI A",
        "IMSI A",
        "A ADDRESS",
      ],
      [
        "Rasia",
        "Reichhardt",
        "7/23/2022",
        "2:35 PM",
        28,
        "0404-6918",
        "43419-601",
        3557300000000000.0,
        374622000000000.0,
        "8th Floor",
      ],
      [
        "Vonnie",
        "Belbin",
        "4/27/2022",
        "5:38 AM",
        29,
        "16590-282",
        "36987-3121",
        3572870000000000.0,
        5100170000000000.0,
        "11th Floor",
      ],
      [
        "Parnell",
        "Killbey",
        "8/14/2022",
        "1:57 PM",
        31,
        "65785-160",
        "0113-0142",
        3554760000000000.0,
        5432060000000000.0,
        "Room 778",
      ],
      [
        "Arlana",
        "McPike",
        "12/26/2022",
        "12:39 AM",
        51,
        "49348-890",
        "68788-9547",
        6759480000000000.0,
        3537110000000000.0,
        "Apt 1854",
      ],
      [
        "Gizela",
        "Wikey",
        "07-10-2022",
        "9:33 AM",
        70,
        "63029-401",
        "60512-6188",
        30500600000000.0,
        201737000000000.0,
        "Room 1228",
      ],
      [
        "Al",
        "Hardage",
        "5/23/2022",
        "8:01 AM",
        14,
        "60760-420",
        "62756-218",
        5.89353e16,
        4913370000000000.0,
        "Room 710",
      ],
      [
        "Reynold",
        "Stawell",
        "04-03-2022",
        "11:30 PM",
        87,
        "57520-0017",
        "60505-3409",
        4508040000000000.0,
        604225000000000.0,
        "Room 607",
      ],
      [
        "Skipp",
        "Bonniface",
        "11/30/2022",
        "9:10 PM",
        12,
        "55154-1390",
        "53645-1140",
        5.02003e16,
        374284000000000.0,
        "PO Box 43903",
      ],
      [
        "Brett",
        "Caton",
        "4/25/2022",
        ,
        "9:57 PM",
        59,
        "53808-0239-0904-6189",
        3561410000000000.0,
        3530990000000000.0,
        "Room 536",
      ],
      [
        "Alica",
        "Paule",
        "4/30/2022",
        "11:59 AM",
        78,
        "41190-368",
        "49348-511",
        3529150000000000.0,
        3535840000000000.0,
        "PO Box 38811",
      ],
      [
        "Mora",
        "Siene",
        "6/29/2022",
        "6:32 AM",
        68,
        "0006-5420",
        "13668-035",
        3577700000000000.0,
        3559570000000000.0,
        "Apt 1491",
      ],
      [
        "Nolie",
        "Grieg",
        "05-09-2022",
        "1:05 PM",
        63,
        "0941-04270378-0873",
        201898000000000.0,
        6.76705e18,
        "Apt 1062",
      ],
    ];
    fetchData()
    // setCsvData(data)
  }, [csvData]);

const getSearchKey = (key)=> {
  console.log(key);
  setsearchKey(key);
}  
  return (
    <div>
      {/* <Navbar getSearchKey ={getSearchKey} /> */}
      <MuiNavbar getSearchKey={getSearchKey} />
      {  false ? <Heatmapph/> : <TableCsv />  }  
      {console.log(data.length)}
    </div>
  );
};

export default App;