export const color = {
  primary: "var(--bsf-admin-primary, #6B21A8)",
  primaryHover: "var(--bsf-admin-primary-hover, #7E22CE)",
  secondary: "var(--bsf-admin-secondary, #F3E8FF)",
  secondaryHover: "var(--bsf-admin-secondary-hover, #E9D5FF)",
  primaryBackground: "var(--bsf-admin-primary-background, #FAF5FF)",
  mutedBackground: "var(--bsf-admin-muted-background, #F3F4F6)",
  background: "var(--bsf-admin-background, #FFFFFF)",
  foreground: "var(--bsf-admin-foreground, #020617)",
  text: "var(--bsf-admin-text, #475569)",
  muted: "var(--bsf-admin-muted, #64748B)",
  mutedText: "var(--bsf-admin-muted-text, #94A3B8)",
  border: "var(--bsf-admin-border, #CBD5E1)",
  borderLight: "var(--bsf-admin-border-light, #E2E8F0)",
  alertInfo: "var(--bsf-admin-alert-info, #3B82F6)",
  alertSuccess: "var(--bsf-admin-alert-success, #22C55E)",
  alertWarning: "var(--bsf-admin-alert-warning, #F59E0B)",
  alertError: "var(--bsf-admin-alert-error, #EF4444)",
  alertInfoBg: "var(--bsf-admin-alert-info-bg, #EFF6FF)",
  alertSuccessBg: "var(--bsf-admin-alert-success-bg, #F0FDF4)",
  alertWarningBg: "var(--bsf-admin-alert-warning-bg, #FFFBEB)",
  alertErrorBg: "var(--bsf-admin-alert-error-bg, #FEF2F2)",
  alertInfoText: "var(--bsf-admin-alert-info-text, #2563eb)",
  alertSuccessText: "var(--bsf-admin-alert-success-text, #16a34a)",
  alertWarningText: "var(--bsf-admin-alert-warning-text, #D97706)",
  alertErrorText: "var(--bsf-admin-alert-error-text, #dc2626)",
};

export const input = {
  fontSize: "var(--bsf-admin-input-font-size, 15px)",
  padding: "var(--bsf-admin-input-padding, 12px 14px)",
  border: "var(--bsf-admin-input-border, 1px solid #d0d5dd)",
  borderRadius: "var(--bsf-admin-input-border-radius, 8px)",
  boxShadow: "var(--bsf-admin-input-box-shadow, 0px 1px 2px 0px #1018280D)",
  color: "var(--bsf-admin-input-color, " + color.text + ")",
};

export const inputPicker = {
  fontSize: "var(--bsf-admin-input-picker-font-size, 15px)",
  padding: "var(--bsf-admin-input-picker-padding, 12px 14px)",
  border: "var(--bsf-admin-input-picker-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-input-picker-border-radius, 8px)",
  boxShadow: "var(--bsf-admin-input-picker-box-shadow, 0px 1px 2px 0px " + color.borderLight + ")",
  color: "var(--bsf-admin-input-color, " + color.text + ")",
};

export const button = {
  mediumFontSize: "var(--bsf-admin-button-medium-font-size, 14px)",
  mediumPadding: "var(--bsf-admin-button-medium-padding, 9px 17px)",
  mediumBorderRadius: "var(--bsf-admin-button-medium-border-radius, 6px)",
  smallFontSize: "var(--bsf-admin-button-small-font-size, 12px)",
  smallPadding: "var(--bsf-admin-button-small-padding, 7px 14px)",
  smallBorderRadius: "var(--bsf-admin-button-small-border-radius, 6px)",
  largeFontSize: "var(--bsf-admin-button-large-font-size, 16px)",
  largePadding: "var(--bsf-admin-button-large-padding, 11px 20px)",
  largeBorderRadius: "var(--bsf-admin-button-large-border-radius, 6px)",
  backgroundColor: "var(--bsf-admin-button-background-color, " + color.primary + ")",
  color: "var(--bsf-admin-button-color, #FFFF)",
  fontWeight: "var(--bsf-admin-button-font-weight, 500)",
  hoverBackgroundColor:
    "var(--bsf-admin-button-hover-background-color, " + color.primaryHover + ")",
  hoverColor: "var(--bsf-admin-button-hover-color, #FFFF)",
};

export const checkbox = {
  size: "var(--bsf-admin-checkbox-size, 16px)",
  borderRadius: "var(--bsf-admin-checkbox-border-radius, 4px)",
  border: "var(--bsf-admin-checkbox-border, 1px solid " + color.foreground + ")",
  checkedBorderColor: "var(--bsf-admin-checkbox-checked-border-color, " + color.primary + ")",
  checkMarkSize: "var(--bsf-admin-checkbox-check-mark-size, 10px)",
  checkMarkColor: "var(--bsf-admin-checkbox-check-mark-color, " + color.background + ")",
  checkBoxBoxShadow: "var(--bsf-admin-checkbox-box-shadow, inset 0 1px 2px #0000001a)",
};

export const textSizes = {
  h1: "var(--bsf-admin-text-size-h1, 32px)",
  h2: "var(--bsf-admin-text-size-h2, 18px)",
  h3: "var(--bsf-admin-text-size-h3, 14px)",
};

export const card = {
  border: "var(--bsf-admin-card-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-card-border-radius, 4px)",
  boxShadow: "var(--bsf-admin-card-box-shadow, 0px 1px 2px 0px " + color.borderLight + ")",
  backgroundColor: "var(--bsf-admin-card-background-color, " + color.background + ")",
  padding: "var(--bsf-admin-card-padding, 24px)",
  gap: "var(--bsf-admin-card-gap, 24px)",
  width: "var(--bsf-admin-card-width, 224px)",
  cardHeaderGap: "var(--bsf-admin-card-header-gap, 8px)",
  cardContentGap: "var(--bsf-admin-card-content-gap, 16px)",
  cardHeaderInfoIconSize: "var(--bsf-admin-card-header-info-icon-size, 16px)",
  cardHeaderInfoIconColor: "var(--bsf-admin-card-header-info-icon-color, " + color.text + ")",
};

export const label = {
  color: "var(--bsf-admin-label-color, " + color.mutedText + ")",
  fontSize: "var(--bsf-admin-label-font-size, 14px)",
  padding: "var(--bsf-admin-label-padding, 2px 6px)",
  border: "var(--bsf-admin-label-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-label-border-radius, 4px)",
  smallSize: "var(--bsf-admin-label-small-size, 10px)",
  mediumSize: "var(--bsf-admin-label-medium-size, 14px)",
  largeSize: "var(--bsf-admin-label-large-size, 18px)",
};

export const multiButton = {
  background: "var(--bsf-admin-multi-button-background-color, " + color.mutedBackground + ")",
  color: "var(--bsf-admin-multi-button-color, " + color.mutedText + ")",
  hoverColor: "var(--bsf-admin-multi-button-hover-color, " + color.foreground + ")",
  fontSize: "var(--bsf-admin-multi-button-font-size, 14px)",

  outlineActiveBackground:
    "var(--bsf-admin-multi-button-outline-active-background, " + color.primaryBackground + ")",
  outlineBorder:
    "var(--bsf-admin-multi-button-outline-border, 1px solid " + color.borderLight + ")",
  outlineBorderRadius: "var(--bsf-admin-multi-button-outline-border-radius, 8px)",
  outlinePadding: "var(--bsf-admin-multi-button-outline-padding, 10px 12px)",

  filledPadding: "var(--bsf-admin-multi-button-filled-padding, 5px)",
  filledInnerPadding: "var(--bsf-admin-multi-button-filled-padding, 6px 12px)",
  filledBorderRadius: "var(--bsf-admin-multi-button-filled-border-radius, 6px)",
  filledBorderRadiusInner: "var(--bsf-admin-multi-button-filled-border-radius-inner, 4px)",
};

export const radio = {
  gap: "var(--bsf-admin-radio-box-gap, 8px)",
  padding: "var(--bsf-admin-radio-box-padding, 12px 16px)",
  containerBorder: "var(--bsf-admin-radio-box-border, 1px solid #EAECF0)",
  checkedBorder: "var(--bsf-admin-radio-box-checked-border, 1px solid " + color.primary + ")",

  radioCheckedBorder : "var(--bsf-admin-radio-box-checked-border, 5px solid " + color.primary + ")",
  borderRadius: "var(--bsf-admin-radio-box-border-radius, 6px)",
  size: "var(--bsf-admin-radio-box-size, 16px)",
  boxShadow: "var(--bsf-admin-radio-box-shadow, inset 0 1px 2px rgba(0, 0, 0, .1))",
  innerBorder: "var(--bsf-admin-radio-box-inner-border, 1px solid #8c8f94)",
  borderColor: "var(--bsf-admin-radio-box-border-color, #8c8f94)",

  radioInnerSize: "var(--bsf-admin-radio-inner-size, 6px)",
  backgroundColor: "var(--bsf-admin-radio-background-color, " + color.primary + ")",
  checkBoxSize: "var(--bsf-admin-radio-check-box-size, 10px)",
  checkMarkColor: "var(--bsf-admin-radio-check-mark-color, #FFFFFF)",
};

export const switchVar = {
  smallWidth: "var(--bsf-admin-switch-small-width, 36px)",
  smallHeight: "var(--bsf-admin-switch-small-height, 20px)",
  smallThumbSize: "var(--bsf-admin-switch-small-thumb-size, 16px)",

  mediumWidth: "var(--bsf-admin-switch-medium-width, 60px)",
  mediumHeight: "var(--bsf-admin-switch-medium-height, 30px)",
  mediumThumbSize: "var(--bsf-admin-switch-medium-thumb-size, 26px)",

  largeWidth: "var(--bsf-admin-switch-large-width, 80px)",
  largeHeight: "var(--bsf-admin-switch-large-height, 40px)",
  largeThumbSize: "var(--bsf-admin-switch-large-thumb-size, 36px)",

  onColor: "var(--bsf-admin-switch-on-color, " + color.primary + ")",
  offColor: "var(--bsf-admin-switch-off-color, " + color.border + ")",

  thumbColor: "var(--bsf-admin-switch-thumb-color, #FFFFFF)",

  borderRadius: "var(--bsf-admin-switch-border-radius, 34px)",

  labelFontSize: "var(--bsf-admin-switch-label-font-size, 12px)",
  labelLineHeight: "var(--bsf-admin-switch-label-line-height, 18px)",
  labelColor: "var(--bsf-admin-switch-label-color, " + color.muted + ")",
  labelGap: "var(--bsf-admin-switch-label-gap, 8px)",
  descriptionGap: "var(--bsf-admin-switch-description-gap, 6px)",
};

export const description = {
  color: "var(--bsf-admin-description-color, " + color.muted + ")",
  fontSize: "var(--bsf-admin-description-font-size, 12px)",
  lineHeight: "var(--bsf-admin-description-line-height, 18px)",
  gap: "var(--bsf-admin-description-gap, 6px)",
};

export const sidebar = {
  gap: "var(--bsf-admin-sidebar-gap, 4px)",

  listItemFontWeight: "var(--bsf-admin-sidebar-list-item-font-weight, 500)",
  listItemFontSize: "var(--bsf-admin-sidebar-list-item-font-size, 14px)",
  listItemPadding: "var(--bsf-admin-sidebar-list-item-padding, 8px 16px)",

  listItemColor: "var(--bsf-admin-sidebar-list-item-color, " + color.text + ")",
  listItemHoverColor: "var(--bsf-admin-sidebar-list-item-hover-color, " + color.foreground + ")",
  listIconColor: "var(--bsf-admin-sidebar-list-icon-color, " + color.muted + ")",
  listIconHoverColor: "var(--bsf-admin-sidebar-list-icon-hover-color, " + color.primary + ")",
  listItemBackgroundColor:
    "var(--bsf-admin-sidebar-list-item-background-color, " + color.background + ")",
  listItemHoverBackgroundColor:
    "var(--bsf-admin-sidebar-list-item-hover-background-color, " + color.primaryBackground + ")",
  listItemSvgSize: "var(--bsf-admin-sidebar-list-item-svg-size, 16px)",
  listItemsGap: "var(--bsf-admin-sidebar-list-items-gap, 8px)",
  listItemsBorderRadius: "var(--bsf-admin-sidebar-list-items-border-radius, 6px)",
};

export const header = {
  padding: "var(--bsf-admin-header-padding, 0 24px)",
  backgroundColor: "var(--bsf-admin-header-background-color, " + color.background + ")",
  borderBottom: "var(--bsf-admin-header-border-bottom, 1px solid " + color.borderLight + ")",
  height: "var(--bsf-admin-header-height, 68px)",
  breadCrumbsFontSize: "var(--bsf-admin-header-breadcrumbs-font-size, 14px)",
  breadCrumbColor: "var(--bsf-admin-header-breadcrumbs-color, " + color.text + ")",
  breadCrumbSvgSize: "var(--bsf-admin-header-breadcrumbs-svg-size, 16px)",
  gap: "var(--bsf-admin-header-gap, 6.5px)",
  separatorHeight: "var(--bsf-admin-header-breadcrumbs-separator-height, 16px)",
  separatorBorder:
    "var(--bsf-admin-header-breadcrumbs-separator-border, 1px solid " + color.borderLight + ")",
};

export const uploader = {
  inputPadding: "var(--bsf-admin-uploader-input-padding, 12px 14px)",
  inputFontSize: "var(--bsf-admin-uploader-input-font-size, 15px)",
  inputBorder: "var(--bsf-admin-uploader-input-border, 1px solid " + color.borderLight + ")",
  inputBorderRadius: "var(--bsf-admin-uploader-input-border-radius, 8px)",
  inputBoxShadow:
    "var(--bsf-admin-uploader-input-box-shadow, 0px 1px 2px 0px " + color.borderLight + ")",
  inputColor: "var(--bsf-admin-uploader-input-color, " + color.text + ")",
  buttonPadding: "var(--bsf-admin-uploader-button-padding, 10px 16px)",
  buttonBorderRadius: "var(--bsf-admin-uploader-button-border-radius, 6px)",
  buttonColor: "var(--bsf-admin-uploader-button-color, " + color.primary + ")",
  buttonBackgroundColor:
    "var(--bsf-admin-uploader-button-background-color, " + color.secondary + ")",
  buttonFontSize: "var(--bsf-admin-uploader-button-font-size, 14px)",
  buttonLineHeight: "var(--bsf-admin-uploader-button-line-height, 24px)",
};
