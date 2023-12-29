import { FC, useState } from "react";

export type TextfieldProps = {
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const Textfield: FC<TextfieldProps> = (props) => {
  const { onChange, placeholder } = props;

  const [inputValue, setInputValue] = useState("");

  function handleChange(value: string) {
    setInputValue(value);
    onChange?.(value);
  }

  return (
    <div className="textfield">
      <input
        type="text"
        className="px-2 py-1 text-gray-500 placeholder-gray-500/70 text-sm"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
