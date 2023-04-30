/* eslint-disabled */
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import Header from './components/Header'
import Product from './components/Product'
import ProductItem from './components/ProductItem'
import { useMemo } from 'react'

export default function App() {
  const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0)
  })

  const productList = [
    {
      id: 1,
      img: 'images/bubbletea.png',
      alt: 'Bubbletea',
      name: 'Bubbletea',
      price: '2 moneys'
    },
    {
      id: 2,
      img: 'images/pizza.jpg',
      alt: 'Pizza',
      name: 'ONE slice of pizza',
      price: '0.5 moneys'
    }
  ]

  return (
    <div className="App">
      <Header />
      <div>
        <div className="counter-container">
          <p>{productsCount}</p>
        </div>
        <div className="your-products-list">
          {products.map(item => (
            <ProductItem
              key={item.id}
              name={item.name}
              alt={item.alt}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
            />
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
