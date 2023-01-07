function getName<Type>(name: Type): Type {
    return name
}

interface Product {
    name: string,
    brand: string,
    price: number
}


function getProducts<Type>(products: Type[]): Type[] {
    return products
}

//arrow function with generics
const getMoreProducts = <Type>(products: Type[]): Type[] => {
    return products
}

function sellProducts<Type extends Product>(products: Type[]): Type[] {
    return products
}

sellProducts([{name: 'iPhone', brand: 'apple', price: 999}])


//// Generics Class
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class SellAble<Type> {
    public cart: Type[] = []

    addToCart(product: Type) {
        this.cart.push(product)
    }
}
