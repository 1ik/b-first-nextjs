/* eslint-disable-next-line */
export interface ComponentsButtonProps {
  loading?: boolean;
  classes?: string;
}

export function Button(props: ComponentsButtonProps) {
  return (
    <button type="submit" className={"btn btn-primary " + props.classes}>
      {props.loading && <span className="loading loading-spinner"></span>}
      Sign in
    </button>
  );
}

export default Button;
