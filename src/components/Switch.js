import React from "react";
import { css } from "@emotion/css";
import Container from "./Container";
import WithDescription from "./WithDescription";
import { switchVar } from "../css-variables";

const Switch = ({
  checked = false,
  onClick,
  disabled = false,
  size = "small",
  onColor = switchVar.onColor,
  offColor = switchVar.offColor,
  thumbColor = switchVar.thumbColor,
  label,
  labelPosition = "right",
  labelGap = switchVar.labelGap,
  description,
  descriptionGap = switchVar.descriptionGap,
}) => {
  const switchSize = {
    small: {
      width: switchVar.smallWidth,
      height: switchVar.smallHeight,
      thumbSize: switchVar.smallThumbSize,
    },
    medium: {
      width: switchVar.mediumWidth,
      height: switchVar.mediumHeight,
      thumbSize: switchVar.mediumThumbSize,
    },
    large: {
      width: switchVar.largeWidth,
      height: switchVar.largeHeight,
      thumbSize: switchVar.largeThumbSize,
    },
  }[size];

  const switchClass = css({
    position: "relative",
    display: "inline-block",
    width: switchSize.width,
    height: switchSize.height,
    backgroundColor: checked ? onColor : offColor,
    borderRadius: switchVar.borderRadius,
    cursor: "pointer",
    transition: "background-color 0.2s",
  });

  const thumbClass = css({
    position: "absolute",
    top: "50%",
    left: checked ? `calc(100% - ${switchSize.thumbSize} - 2px)` : "2px",
    width: switchSize.thumbSize,
    height: switchSize.thumbSize,
    backgroundColor: thumbColor,
    borderRadius: "50%",
    transform: "translateY(-50%)",
    transition: "left 0.2s",
  });

  const labelClass = css({
    cursor: "pointer",
    fontSize: switchVar.labelFontSize,
    fontWeight: 400,
    lineHeight: switchVar.labelLineHeight,
    display: "block",
    color: switchVar.labelColor,
  });

  const handleOnclick = () => !disabled && onClick();

  const labelContent = (
    <span className={labelClass} onClick={handleOnclick}>
      {label}
    </span>
  );

  return (
    <WithDescription
      gap={descriptionGap}
      description={description}
    >
      <Container
        containerType="flex"
        gap={labelGap}
        alignItems="center"
        style={disabled ? { opacity: 0.5 } : {}}
      >
        {label && labelPosition === "left" && labelContent}
        <div className={switchClass} onClick={handleOnclick}>
          <div className={thumbClass}></div>
        </div>
        {label && labelPosition === "right" && labelContent}
      </Container>
    </WithDescription>
  );
};

export default Switch;
