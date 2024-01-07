export default function Content(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    return (
        <div className='content'>
            {children}</div>
    );
}
