interface ButtonProps {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  text: string;
  icon: string;
}

const Button = ({ onClick, className, style, text, icon }: ButtonProps) => {
  return (
    <div
      className={"btn px-4 py-2 d-flex gap-2 justify-content-center " + className}
      style={style}
      onClick={onClick}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {text}
    </div>
  );
};

export default Button;
