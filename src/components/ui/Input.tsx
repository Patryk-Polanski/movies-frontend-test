import { useCallback } from "react";

type Props = {
  onChange: (value: string) => void;
  inputId: string;
  inputName: string;
  value: string;
};

const Input = ({ inputId, inputName, onChange, value }: Props) => {
  const onChangeCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      value={value}
      onChange={onChangeCb}
      className="bg-slate-50 text-zinc-950 rounded-lg font-medium pl-2 pr-4 py-2 w-full"
      id={inputId}
      name={inputName}
      placeholder="Enter movie name here"
      // required
    />
  );
};

export default Input;
