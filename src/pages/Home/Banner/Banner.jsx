import Hero from "./Hero"
import Navbar from "./Navbar"

const Banner = () => {
  return (
    <div className="relative side-pd angled-section">
        <div className="angled-bg-1"></div>
        <div className="angled-bg-2"></div>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Banner