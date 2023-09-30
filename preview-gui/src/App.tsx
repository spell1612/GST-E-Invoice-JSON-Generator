import { Fragment, useEffect, useState } from "react";
import { Invoice } from "./types/Type";
import Bill from "./components/Bill";

const App = () => {
  const [billData, setBillData] = useState([]);

  const readJSON = async () => {
    const jsonData = (await fetch("BillData.json")).json();
    setBillData(await jsonData);
  };

  useEffect(() => {
    readJSON();
  }, []);

  return (
    <Fragment>
      <div className="d-flex flex-col flex-wrap p-2">
        {billData.map((bill: Invoice, index) => (
          <Bill key={index} bill={bill} />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
