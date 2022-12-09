import React from "react";
import { inputProps } from "./form.types";
import classes from "./Search.module.css";

export const FormInput = ({
  placeholder,
  value,
  className,
  name,
  onChange,
}: inputProps) => {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        className={`${classes.input} ${className || ""}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
