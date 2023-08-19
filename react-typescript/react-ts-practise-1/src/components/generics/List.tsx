type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

const List = <T extends { id: string }>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item) => (
                <div key={item.id} onClick={() => onClick(item)}>
                    {item.id}
                </div>
            ))}
        </div>
    );
};

export default List;
