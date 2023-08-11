type HeadingProps = {
    children: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
    return <div>{props.children}</div>;
};

export const Typography = ({ children }: { children: string }) => {
    return <h1>{children}</h1>;
};

export default Heading;
