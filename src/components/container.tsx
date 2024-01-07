type TContainer = {
  className?: string;
};

export default function Container(props: TContainer & React.PropsWithChildren<{}>): React.ReactElement {
  const { children, className } = props;
  return (
    <div className={`container ${className}`}>{children}</div>
  );
}
