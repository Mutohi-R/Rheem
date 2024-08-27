import { useRef, useState } from 'react'

import ProductCard from './ProductCard.jsx'
import ProductModal from '../ProductModal/ProductModal.jsx'
import products from '../../data/products.json'

const ProductCardList = () => {

  const productModal = useRef(null)
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openProductModal = (id) => {
    setSelectedProductId(id);
    if (productModal.current) {
      productModal.current.showModal()
    }
  }

  const closeProductModal = () => {
    if (productModal.current) {
      productModal.current.close()
    }
    setSelectedProductId(null);
  }
  
  return (
    <>
      <article className='product-card-list'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            onClick={() => openProductModal(product.id)}
          />
        ))}
      </article>
      <dialog ref={productModal} id="product-modal" className="product-modal">
        {
          selectedProductId && (
            <ProductModal productId={selectedProductId} onClose={closeProductModal} />
          )
        }
      </dialog>
    </>
  )
}

export default ProductCardList
