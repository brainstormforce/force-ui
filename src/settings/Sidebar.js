import React from "react";
import { css, cx } from "@emotion/css";
import { sidebar as sidebarVars } from "../css-variables";

const Sidebar = ({
  listItems,
  listItemColor = sidebarVars.listItemColor,
  listItemHoverColor = sidebarVars.listItemHoverColor,
  listIconColor = sidebarVars.listIconColor,
  listIconHoverColor = sidebarVars.listIconHoverColor,
  listItemBackgroundColor = sidebarVars.listItemBackgroundColor,
  listItemHoverBackgroundColor = sidebarVars.listItemHoverBackgroundColor,
  listStyle,
  className,
  activeItem,
}) => {
  const sidebarCSS = css({
    display: "flex",
    flexDirection: "column",
    gap: sidebarVars.gap,
    boxSizing: "border-box",
    "& *": {
      boxSizing: "border-box",
    },
    "& .sidebar-list-item": {
      fontWeight: sidebarVars.listItemFontWeight,
      fontSize: sidebarVars.listItemFontSize,
      display: "flex",
      alignItems: "center",
      padding: sidebarVars.listItemPadding,
      color: listItemColor,
      backgroundColor: listItemBackgroundColor,
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      gap: sidebarVars.listItemsGap,
      borderRadius: sidebarVars.listItemsBorderRadius,
      "&:hover, &.active": {
        backgroundColor: listItemHoverBackgroundColor,
        color: listItemHoverColor,
        "& svg": {
          color: listIconHoverColor,
        },
      },
    },
    "& .sidebar-list-item svg": {
      width: sidebarVars.listItemSvgSize,
      height: sidebarVars.listItemSvgSize,
      color: listIconColor,
    },
    ...listStyle,
  });

  const sidebarClass = cx(className, sidebarCSS);

  const isActive = (id) => id === activeItem;

  return (
    <div className={sidebarClass}>
      {listItems.map((item) => (
        <div
          key={item.id}
          className={cx(item.className, "sidebar-list-item", isActive(item.id) && "active")}
          onClick={item.onClick}
        >
          {item.icon && <div>{item.icon}</div>}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
