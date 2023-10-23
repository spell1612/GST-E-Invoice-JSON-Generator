import { Fragment, useEffect, useState } from "react";
import { Invoice } from "./types/type";
import Bill from "./components/Bill";
import ToolBar from "./components/ToolBar";

const App = () => {
  const [billData, setBillData] = useState<Invoice[]>([]);

  const readJSON = async () => {
    try {
      const jsonData = (
        await fetch("./src/assets/" + (import.meta.env.VITE_FILE_NAME as string))
      ).json();
      setBillData(await jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const saveBillData = (index: number, bill: Invoice) => {
    setBillData((prevBillData) => {
      const updatedBillData = [...prevBillData];
      updatedBillData[index] = bill;
      return updatedBillData;
    });
  };

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(billData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "Bills.json";
    link.click();
  };

  useEffect(() => {
    readJSON();
  }, []);

  return (
    <Fragment>
      <ToolBar exportData={exportData} />
      <div className="main d-flex flex-col flex-wrap justify-content-center pt-3 m-5">
        {billData.map((bill: Invoice, index) => (
          <Bill key={index} saveBillData={saveBillData} index={index} bill={bill} />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
