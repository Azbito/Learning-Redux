import LocalMallIcon from '@mui/icons-material/LocalMall'
import { usdFormatter } from '../../utils/usdFormat'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../redux/cart/cart.selectors'
import { useSelector } from 'react-redux'
import './styles.scss'

export default function Cart() {
  const productsCount = useSelector(selectProductsCount)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <div className="cart-container">
      <div className="cart-quantity-content">
        <LocalMallIcon />
        <p>{productsCount}</p>
      </div>
      <p className="total-price-content">
        {usdFormatter.format(productsTotalPrice)}
      </p>
    </div>
  )
}
