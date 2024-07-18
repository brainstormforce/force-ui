import React from "react";
import Container from "./Container";
import WithDescription from "./WithDescription";
import { color, input as inputValues } from "../css-variables";
import { prefix } from "../utility/utils";

const Input = (props) => {
  const {
    type = "text",
    value = "",
    labelGap = 8,
    description = "",
    descriptionGap = 6,
    inputContainerStyle = {},
    style = {},
    className = "",
    inputProps,
    onChange = () => {},
  } = props;

  const inputClassName = prefix() + "input";
  const cssKey = "& > input." + inputClassName + ", & > textarea." + inputClassName;

  const containerWithInputStyle = {
    ...inputContainerStyle,
    [cssKey]: {
      fontSize: inputValues.fontSize,
      padding: inputValues.padding,
      border: inputValues.border,
      position: "relative",
      borderRadius: inputValues.borderRadius,
      boxShadow: inputValues.boxShadow,
      color: inputValues.color,
      lineHeight: 1,
      minHeight: "unset",
      margin: 0,
      ...style,
    },
  };

  const inputClassNames = inputClassName + (!className ? "" : " " + className);

  let inputContent;

  if (type === "textarea") {
    inputContent = (
      <textarea {...inputProps} className={inputClassNames} value={value} onChange={onChange} />
    );
  } else {
    inputContent = (
      <input
        {...inputProps}
        className={inputClassNames}
        type={type}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <WithDescription
      gap={descriptionGap}
      description={description}
    >
      <Container
        gap={labelGap}
        style={containerWithInputStyle}
      >
        {inputContent}
      </Container>
    </WithDescription>
  );
};

export default Input;
