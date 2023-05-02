/* eslint-disabled */
import { useSelector } from 'react-redux'
import './App.scss'
import Header from './components/Header'
import Product from './components/Product'
import CartItem from './components/CartItem'

export default function App() {
  const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const productList = [
    {
      id: 1,
      img: 'images/bubbletea.png',
      alt: 'Bubbletea',
      name: 'Bubbletea',
      price: 2
    },
    {
      id: 2,
      img: 'images/pizza.jpg',
      alt: 'Pizza',
      name: 'ONE slice of pizza',
      price: 0.5
    },
    {
      id: 3,
      img: 'images/radish.png',
      alt: 'Radish',
      name: 'Radish',
      price: 1572.3
    },
    {
      id: 4,
      img: 'images/meat.png',
      alt: 'Meat',
      name: 'Meat',
      price: 10
    }
  ]

  return (
    <div className="App">
      <Header />
      <div>
        <div className="your-products-list">
          {products.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="shopping-container">
        {productList.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
