
import Navbar from './components/Navbar.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from'./sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'

const App = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <ShowcaseSection/>
<FeatureCards/>
<Experience/>
<TechStack/>
  </>
      
  )
}

export default App
