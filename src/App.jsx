import Banner from "./components/Banner"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Getstarted from "./components/Getstarted"
import Navbar from "./components/Navbar"
import Pricingcard from "./components/Pricingcard"
import Products from "./components/Products"
import Workflow from "./components/Workflow"

const getProducts = async () => {
  const res = await fetch ('/digitools.json')
  return res.json()
}

const productPromise = getProducts()

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Counter/>
      <Products productPromise={productPromise}/>
      <Getstarted/>
      <Pricingcard/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
