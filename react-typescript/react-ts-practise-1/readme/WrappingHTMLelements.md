# Custom Button with type props

```ts
type CustomBtnProps = {
    variant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

const CustomBtn = ({ variant, children, ...rest }: CustomBtnProps) => {
    return (
        <button className={`${variant}`} {...rest}>
            {children}
        </button>
    );
};
```

# Custom Input with typed props

```ts
type InputProps = React.ComponentProps<'input'>;

const Input = (props: InputProps) => {
    return <input {...props} />;
};
```
