import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './assets/navbar'
import { Advertisement } from './assets/advertisement'
import { Categories } from './assets/categories'
 import './App.css'
import { SpecialDish } from './assets/specialDish'
import { Testimonial } from './assets/testimonial'
import { StoryService } from './assets/story&service'
import { Footer } from './assets/footer'
import { Service } from './pages/service'
import { Menu } from './pages/menu'
import { Offers } from './pages/offers'
import { Home } from './pages/Home'
// import  './navbar.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div className='root1'>
    //   <Navbar />
    //   <Advertisement />
    //   <Categories />
    //   <SpecialDish />
    //   <Testimonial />
    //   <StoryService/>
    //   <Footer/>
    // </div>
    <Router>
      <div className='root1'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/service' element={<Service />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
        <Advertisement />
        <Categories />
        <SpecialDish />
        <Testimonial />
        <StoryService />
        <Footer />
      </div>
    </Router>
  )
}

export default App
