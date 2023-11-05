const products = [
    {
        "id": 1,
        "name": "Laptop Dell XPS 13",
        "price": 1499.99,
        "category": "Laptops",
        "img": "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF1Q0hWY3NBdkwuX0FDX1NMMTEwNV8uanBn.jpg",
        "stock": 20,
        "description": "Laptop Dell XPS 13 con pantalla táctil de 13 pulgadas, procesador Intel Core i7, 16 GB de RAM y 512 GB de almacenamiento SSD."
    },
    {
        "id": 2,
        "name": "iPhone 13 Pro",
        "price": 1099.00,
        "category": "Smartphones",
        "img": "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg",
        "stock": 15,
        "description": "iPhone 13 Pro con pantalla Super Retina XDR de 6.1 pulgadas, chip A15 Bionic, cámara triple y 128 GB de almacenamiento."
    },
    {
        "id": 3,
        "name": "Samsung QLED 4K TV",
        "price": 1299.99,
        "category": "Televisores",
        "img": "https://images.samsung.com/is/image/samsung/p6pim/ar/qn65q65bagczb/gallery/ar-qled-q60b-qn65q65bagczb-534377626?$650_519_PNG$",
        "stock": 10,
        "description": "Samsung QLED 4K TV de 55 pulgadas con resolución Ultra HD, HDR, y tecnología Quantum Dot para una calidad de imagen excepcional."
    }

    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    }

    )       
}

export const getProductsById = (productId) => {
    productId = parseInt(productId);

    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category)=> {
    console.log("la cat esss: " + category);
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve(products.filter( prod => prod.category === category))
         }, 500) })
}
