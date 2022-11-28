/// <reference types="react" />
export type BadgeTheme = "primary" | "secondary" | "success" | "danger" | "info" | "light" | "dark" | "warning";
export interface PropsBadge extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    theme: BadgeTheme;
    children?: JSX.Element | JSX.Element[] | string;
    rounded?: boolean;
}
