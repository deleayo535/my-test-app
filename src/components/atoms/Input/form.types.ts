export type inputProps = {
  label?: string;
  htmlFor?: string;
  placeholder: string;
  rows?: number;
  type?: string;
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};
