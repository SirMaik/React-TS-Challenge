import React from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setCheck: (value: boolean) => void;
}

export const Checkbox = ({
  label,
  isChecked,
  setCheck
}: CheckboxProps): JSX.Element => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
      {label}
    </label>
  );
};
