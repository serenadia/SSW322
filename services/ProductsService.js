const PRODUCTS = [
    {
        id: 100,
        name: 'Gamer Mouse 360',
        price: 350,
        image: require('../app/assers/computer-mouse.jpg'),
        description: 'A computer accessory that allows for the person to connect and utlize with their computer.'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}