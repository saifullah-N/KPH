import {React , useState } from 'react'
function Navbar({ getSearchKey }) {
      const [value,setValue]=useState('')
  //     const logIt = (x)=>{
  //         console.log(x);
  //     }
  return (
    //     <DataContext.Consumer>
    //   {    (context)=>{
    //     return (
    //     <Fragment>
    <nav>
      <label htmlFor="phNo">enter phno:</label>
      <input name="phNo" onChange={(e) => setValue(e.target.value)} />
      <input
        type="button"
        onClick={() => getSearchKey(value)}
        value="submit"
      />
    </nav>
    //    </Fragment>)
    //     }}
    //     </DataContext.Consumer>
  );
}

export default Navbar