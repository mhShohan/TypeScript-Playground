# Polymorphic Component

```ts
type TypographyOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    as?: E;
};

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TypographyOwnProps<E>>;

const Typography = <E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as,
}: TypographyProps<E>) => {
    const Component = as || 'div';
    return <Component className={`${size}-${color}`}>{children}</Component>;
};

export default Typography;
```
