// Content component.
// Relevant styles can be found in: src\sass\layout\_content.scss

export default function Content(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;
    return (
        <div className='content'>
            {children}</div>
    );
}
