import React from "react";
import s from "./SelectOption.module.scss";
import Select, { components } from "react-select";

const { Option } = components;
const IconOption = (props) => {
  const IconComponent = props.data.icon;
  return (
    <Option className={s.customSelect} {...props}>
      <IconComponent />
      {props.data.label}
    </Option>
  );
};

export const SelectOption = ({ options }) => {
  return (
    <Select
      className={s.customSelect}
      defaultValue={options[0]}
      options={options}
      components={{ Option: IconOption }}
      theme={(theme) => ({
        ...theme,
        borderRadius: "0.5rem",
        fontSize: "1.6rem",
        textAlign: "center",
        colors: {
          ...theme.colors,
          primary25: "hotpink",
          primary: "black",
        },
      })}
    />
  );
};