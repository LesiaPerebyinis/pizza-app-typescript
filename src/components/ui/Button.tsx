interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  width?: string | number;
  height?: string | number;
}

export default function Button({children, onClick, width, height}: IButtonProps) {
  return (
    <button
      style={{ width, height }}
      className="flex items-center justify-center bg-primery text-center text-white rounded-md font-bold cursor-pointer hover:bg-accent transition-all duration-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
