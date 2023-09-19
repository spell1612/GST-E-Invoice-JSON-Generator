import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [billData, setBillData] = useState("");

  const readJSON = async () => {
    const jsonData = (await fetch("BillData.json")).json();
    setBillData(await jsonData);
  };

  useEffect(() => {
    readJSON();
  }, []);
  return (
    <Fragment>
      <div>{JSON.stringify(billData)}</div>
    </Fragment>
  );
}

export default App;
