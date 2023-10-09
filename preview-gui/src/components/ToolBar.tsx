import { ToolbarProps } from "../types/Type";

const ToolBar = ({ exportData }: ToolbarProps) => {
  return (
    <div className="w-100 toolbar">
      <div className="py-1 mx-5 d-flex justify-content-end">
        <span
          style={{ fontSize: 51 }}
          className="material-symbols-outlined toolbar-icon"
          onClick={exportData}
        >
          download
        </span>
      </div>
    </div>
  );
};

export default ToolBar;
