import Spinner from "@/assets/icons/Spinner";

type Props = {
  buttonText: string;
  isLoading: boolean;
};

// TODO: add more button variations (primary, secondary, etc)
const Button = ({ isLoading, buttonText = "Button" }: Props) => {
  return (
    <button className="bg-fuchsia-500 text-slate-50 py-2 px-14 rounded-lg font-medium cursor-pointer relative">
      {!isLoading ? (
        <span>{buttonText}</span>
      ) : (
        <>
          <span className="opacity-0">{buttonText}</span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Spinner className="w-7 h-7" />
          </div>
        </>
      )}
    </button>
  );
};

export default Button;
