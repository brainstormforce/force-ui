import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { css, cx } from "@emotion/css";
import Select from "react-select";
import Container from "./Container";
import { inputPicker as inputPickerVars } from "../css-variables";
import { prefix } from "../utility/utils";

const RichSelect = forwardRef((props, ref) => {
  const { options, value, onChange, ...rest } = props;
  const selectRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (selectRef.current) {
        selectRef.current.focus();
      }
    },
  }));

  const labelClassName = prefix() + "input-picker-header-label";
  const descriptionClassName = prefix() + "input-picker-description";
  const titleClassName = prefix() + "input-picker-header-title";

  const labelClassKey = "& ." + labelClassName;
  const descriptionClassKey = "& ." + descriptionClassName;
  const titleClassKey = "& ." + titleClassName;

  const CustomOption = (optionProps) => {
    const { data, innerProps } = optionProps;

    const customStyle = css({
      cursor: "pointer",
      borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
      [labelClassKey]: {
        fontSize: "14px",
        color: "#232323",
        fontWeight: 500,
      },
      [descriptionClassKey]: {
        fontSize: 12,
        color: "#666",
        fontStyle: "italic",
      },
      [titleClassKey]: {
        fontSize: 14,
        backgroundColor: "#e8e8e8",
        width: "fit-content",
        height: "fit-content",
        padding: "4px 6px",
        borderRadius: 4,
        color: "#686868",
      },
    });

    return (
      <Container
        containerType="flex"
        justifyContent="space-between"
        extraProps={innerProps}
        padding={10}
        className={customStyle}
        gap={10}
      >
        <Container
          gap={8}
          padding={10}
          extraProps={innerProps}
        >
          <div className={labelClassName}>{data.label}</div>
          <div className={descriptionClassName}>{data.description}</div>
        </Container>
        <div className={titleClassName}>{data.title}</div>
      </Container>
    );
  };

  return (
    <Select
      ref={selectRef}
      components={{ Option: CustomOption }}
      options={options}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
});

const VariablePicker = (props) => {
  const { onChange, options, type, value, className, inputStyle, inputProps } = props;

  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const [openVariablePicker, setOpenVariablePicker] = useState(false);

  const handleKeyDown = (event) => {
    if (event?.key === "%" || event?.key === "ArrowDown") {
      setOpenVariablePicker(true);
      setTimeout(() => {
        selectRef.current?.focus();
      }, 0);
      event.preventDefault();
    }
  };

  const updateData = (event) => {
    onChange(event?.target?.value);
  };

  const updateInputData = (selectedOption) => {
    const pickerValue = selectedOption?.title;
    const concatWithValue = value !== "" ? value + " " + pickerValue : pickerValue;
    onChange(concatWithValue);
    setOpenVariablePicker(false);
  };

  const inputClassName = prefix() + "input";
  const cssKey = "&." + inputClassName;

  const inputClassCss = css({
    display: "block",
    [cssKey]: {
      fontSize: inputPickerVars.fontSize,
      padding: inputPickerVars.padding,
      border: inputPickerVars.border,
      borderRadius: inputPickerVars.borderRadius,
      boxShadow: inputPickerVars.boxShadow,
      position: "relative",
      lineHeight: 1,
      minHeight: "unset",
      color: inputPickerVars.color,
      margin: 0,
      width: "100%",
      ...inputStyle,
    },
  });

  const combineClass = cx(className, inputClassName, inputClassCss);

  const field = type === "textarea" ? (
    <textarea
      {...inputProps}
      value={value}
      rows={3}
      onKeyDown={handleKeyDown}
      onChange={updateData}
      ref={inputRef}
      className={combineClass}
    />
  ) : (
    <input
      {...inputProps}
      value={value}
      type="text"
      onKeyDown={handleKeyDown}
      onChange={updateData}
      ref={inputRef}
      className={combineClass}
    />
  );

  return (
    <>
      {field}
      {openVariablePicker && (
        <RichSelect
          options={options}
          onChange={updateInputData}
          onSelectResetsInput={true}
          ref={selectRef}
          openMenuOnFocus={true}
          onBlur={() => {
            setOpenVariablePicker(false);
          }}
          style={{ width: "80%" }}
        />
      )}
    </>
  );
};

export default VariablePicker;
