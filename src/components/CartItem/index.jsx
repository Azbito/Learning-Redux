import { useDispatch } from 'react-redux'
import './styles.scss'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductsFromCart
} from '../../redux/cart/actions'
import RedButton from '../RedButton'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RemoveIcon from '@mui/icons-material/Remove'
import GreenButton from '../GreenButton'
import AddIcon from '@mui/icons-material/Add'

export default function CartItem({ product }) {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductsFromCart(product.id))
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseProductQuantity(product.id))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseProductQuantity(product.id))
  }

  return (
    <div className="product-item-container">
      <div className="product-item-remove-button">
        <RedButton onClick={handleRemoveClick}>
          <DeleteOutlineIcon />
        </RedButton>
      </div>
      <img src={product.img} alt={product.alt} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <p>
        <b>Quantity: </b>
        {product.quantity}
      </p>
      <div className="buttons-container">
        <GreenButton onClick={handleIncreaseQuantity}>
          <AddIcon />
        </GreenButton>
        <RedButton onClick={handleDecreaseQuantity}>
          <RemoveIcon />
        </RedButton>
      </div>
    </div>
  )
}
