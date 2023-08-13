type HeadingProps = {
    children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
    return <div>{children}</div>;
};

export const Typography = ({ children }: { children: string }) => {
    return <h1>{children}</h1>;
};

export default Heading;
