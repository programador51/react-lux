import React from "react";
import scss from "./styles.module.scss";
import { PropsBadge } from "./types";

const THEMES = {
  primary: scss.badgePrimary,
  secondary: scss.badgeSecondary,
  success: scss.badgeSuccess,
  danger: scss.badgeDanger,
  warning: scss.badgeWarning,
  info: scss.badgeInfo,
  light: scss.badgeLight,
  dark: scss.badgeDark,
};

export const Badge = (props: PropsBadge) => {
  const { theme, children } = props;

  if (props.rounded === undefined) {
    return (
      <span {...props} className={THEMES[theme]}>
        {children}
      </span>
    );
  }

  return (
    <div className={scss.badgeRounded}>
      <span {...props} className={THEMES[theme]}>
        {children}
      </span>
    </div>
  );
};
