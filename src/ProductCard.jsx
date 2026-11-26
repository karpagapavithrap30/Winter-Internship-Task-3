function ProductCard({ name, age }) {
  return (
    <div>
      <h2>Product Name</h2>
      <p>Product Description</p>
      <p>Price: $99.99</p>

      <h1>{name}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default ProductCard