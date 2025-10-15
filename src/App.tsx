import Navbar from "./components/Navbar.tsx"
import HeroSection from './components/HeroSection.tsx'
import FeatureSection from './components/FeatureSection/FeatureSection.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
     <Navbar/>
     <HeroSection/>
     <FeatureSection/>
     <Footer/>
    </div>
  )
}

export default App
