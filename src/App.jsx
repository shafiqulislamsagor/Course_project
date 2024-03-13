import { useState } from 'react'
import './App.css'
import Header from './Componant/Header/Header'
import Main from './Componant/Main/Main'
import Select from './Selected/Select';

function App() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0)
  const click = (card) => {
    if (!product.includes(card)) {
      const count = [...product, card];
      setProduct(count)
      const newPrice = price + card.course_price;
      setPrice(newPrice)
    }
  }
  const remove = (remove) => {
    const rv = product.filter(produ => produ !== remove)
    setProduct(rv)
    const newPrice = price - remove.course_price;
    setPrice(newPrice)
  }
  
  

  return (
    <>
      <div className='w-[90%] lg:w-11/12 mx-auto'>
        <div className='sticky top-0'>
          <Header product={product}  price={price}></Header>
        </div>
        
        {product.length > 0 && (<h2 id='views' className='text-center text-3xl text-gray-700 font-bold mt-10 mb-7'>
          Selected Course
        </h2>
        )}
        <div className='w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3'>
          {
            product.map((product, idx) => <Select key={idx} product={product} remove={remove}></Select>)
          }
        </div>
      </div >
      <Main click={click}></Main>
    </>
  )
}

export default App;
