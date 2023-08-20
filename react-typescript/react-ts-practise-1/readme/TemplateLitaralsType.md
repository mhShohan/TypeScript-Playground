```ts
type HorizontalType = 'left' | 'center' | 'right';
type VerticalType = 'top' | 'center' | 'bottom';

type PositionProps = {
    position: `${HorizontalType}-${VerticalType}`;
};
```
