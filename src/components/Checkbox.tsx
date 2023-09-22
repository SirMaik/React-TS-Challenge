import React from "react";

interface CheckboxProps {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(props.value);
  const handleChange = (e: any): void => {
    setIsChecked(!isChecked);
    props.setValue(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {props.label}
    </label>
  );
};
