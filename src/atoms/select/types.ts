export interface PropsSelect
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  children?: JSX.Element | JSX.Element[];
}
