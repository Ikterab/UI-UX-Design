import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './assets/navbar'
import { Advertisement } from './assets/advertisement'
import { Categories } from './assets/categories'
 import './App.css'
import { SpecialDish } from './assets/specialDish'
import { Testimonial } from './assets/testimonial'
import { StoryService } from './assets/story&service'
import { Footer } from './assets/footer'
// import  './navbar.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='root1'>
      <Navbar />
      <Advertisement />
      <Categories />
      <SpecialDish />
      <Testimonial />
      <StoryService/>
      <Footer/>
    </div>
  )
}

export default App
