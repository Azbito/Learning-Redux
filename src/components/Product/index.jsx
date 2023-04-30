import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/cart/actions'
import './styles.scss'
import Button from '../Button'

export default function Product({ product }) {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <div className="product-container">
      <img src={product.img} alt={product.alt} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <Button onClick={handleProductClick} title="Add" />
    </div>
  )
}
