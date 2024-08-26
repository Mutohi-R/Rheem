import ProductCard from './ProductCard.jsx'
import products from '../../data/products.json'

const ProductCardList = () => {
  return (
    <article className='product-card-list'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </article>
  )
}

export default ProductCardList
