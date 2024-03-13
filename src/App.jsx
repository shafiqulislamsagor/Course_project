import { useState } from 'react'
import './App.css'
import Header from './Componant/Header/Header'
import Main from './Componant/Main/Main'

function App() {
  const [product , setProduct] = useState([]);
  const [price , setPrice] = useState(0)
  const click = (card) => {
    const count = [...product,card];
    setProduct(count)
    const newPrice = price + card.course_price;
    setPrice(newPrice)
  }

  return (
    <>
      <div className='w-[90%] lg:w-11/12 mx-auto'>
        <div className='sticky top-0'>
        <Header product={product} price={price}></Header>
        </div>
        <Main click={click}></Main>
      </div>
    </>
  )
}

export default App
