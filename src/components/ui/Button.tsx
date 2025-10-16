type Props = {
  buttonText: string;
};

const Button = ({ buttonText = "Button" }: Props) => {
  return (
    <button className="bg-fuchsia-500 text-slate-50 py-2 px-14 rounded-lg font-medium cursor-pointer">
      {buttonText}
    </button>
  );
};

export default Button;
