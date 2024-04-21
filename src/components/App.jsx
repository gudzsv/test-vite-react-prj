import './App.css'
import Product from './Product'



function App() {


  return (
    <>
    <h1>Products</h1>
    <Product
      name="Tacos With Lime"
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      price={10.99}
    />
    <Product
      name="Fries and Burger"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      price={14.29}
    />
   </>
  )
}

export default App
