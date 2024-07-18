import React from "react";
import { css, cx } from "@emotion/css";
import { ICONS } from "../utility";
import { label as labelVars } from "../css-variables";

const Label = ({
  type,
  content,
  badgeSize = "medium",
  onClick,
  style = {},
  icon_key,
  className,
}) => {
  const badgeStyle = {};
  if (type === "badge") {
    // Add some padding and border radius to the badge.
    badgeStyle["padding"] = labelVars.padding;
    badgeStyle["border"] = labelVars.border;
    badgeStyle["borderRadius"] = labelVars.borderRadius;

    switch (badgeSize) {
      case "small":
        badgeStyle["fontSize"] = labelVars.smallSize;
        break;
      case "medium":
        badgeStyle["fontSize"] = labelVars.mediumSize;
        break;
      case "large":
        badgeStyle["fontSize"] = labelVars.largeSize;
        break;
      default:
        break;
    }
  }

  const labelStyle = {
    color: labelVars.color,
    cursor: onClick ? "pointer" : "default",
    fontWeight: "bold",
    width: "fit-content",
    ...badgeStyle,
    ...style,
  };

  let labelClass = css(labelStyle);

  // if className is passed, add it to the labelClass
  if (className) {
    labelClass = cx(labelClass, className);
  }

  // Assigning content based on type and icon_key
  if (type === "icon" && icon_key && ICONS[icon_key]) {
    content = ICONS[icon_key];
  }

  return (
    <div className={labelClass} onClick={onClick}>
      {content}
    </div>
  );
};

export default Label;
