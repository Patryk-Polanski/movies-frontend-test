import Spinner from "@/assets/icons/Spinner";

type Props = {
  buttonText: string;
  isLoading?: boolean;
  variant?: "primary" | "outline";
  active?: boolean;
  onClick?: () => void;
};

const Button = ({
  isLoading,
  buttonText = "Button",
  variant = "primary",
  active,
  onClick,
}: Props) => {
  if (variant === "outline") {
    return (
      <button
        className={`p-3 border-2 ${
          !active ? "border-slate-50/20" : "border-fuchsia-500"
        } cursor-pointer hover:border-slate-50/40 transition-all duration-200 ease-in`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    );
  }

  return (
    <button
      className="bg-fuchsia-500 hover:bg-fuchsia-600 transition-all duration-200 ease-in text-slate-50 py-2 px-14 rounded-lg font-medium cursor-pointer relative"
      onClick={onClick}
      disabled={isLoading}
    >
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
