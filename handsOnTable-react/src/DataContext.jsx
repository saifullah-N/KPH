import React , { useState ,createContext , useEffect, useContext } from "react";
import axios, { Axios } from 'axios'
export const DataContext = createContext('hello');
export default function DataContextProvider({children}) {

    const [search,setSearch] = useState('')
  return (
    <DataContext.Provider value={{search:search,setSearch:(a)=>setSearch(a)}}>
      {children}
    </DataContext.Provider>
  );
  // export data ,setData , search ,setSearch
}