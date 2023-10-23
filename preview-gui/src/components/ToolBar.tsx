import { ToolbarProps } from "../types/type";
import Button from "./Button";

const ToolBar = ({ exportData }: ToolbarProps) => {
  return (
    <div className="w-100 toolbar">
      <div className="py-1 mx-5 d-flex justify-content-end align-items-center mt-1">
        <Button onClick={exportData} className="btn-primary" text="Download" icon="download" />
      </div>
    </div>
  );
};

export default ToolBar;
