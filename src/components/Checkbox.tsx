import React from "react";
import { Checkbox as MantineCheckbox } from "@mantine/core";

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
    <MantineCheckbox
      type="checkbox"
      checked={isChecked}
      label={label}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    />
  );
};
