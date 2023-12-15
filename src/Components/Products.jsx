const Products = ({products}) => {
    // Instructions:
    //     1. Import the products state as props
    //     2. Loop over useing #map 
    //     3. Show the product name in an h1, and the product price in a p tag

    // console.log(products)

    return products.map((item) => {
            return (
                <div>
                    <h1>${item.productData.name}</h1>
                    <p>${item.productData.pricing}</p>
                </div>
            )
        })
}

export default Products