// Container component.
// Relevant styles can be found in: src\sass\layout\_container.scss

type TContainer = {
  className?: string;
};

export default function Container(props: TContainer & React.PropsWithChildren<{}>): React.ReactElement {
  const { children, className } = props;
  return (
    <div className={`container ${className}`}>{children}</div>
  );
}
