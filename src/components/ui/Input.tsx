import { useCallback } from "react";

type Props = {
  onChange: (value: string) => void;
  inputId: string;
  inputName: string;
};

const Input = ({ inputId, inputName, onChange }: Props) => {
  const onChangeCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
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
