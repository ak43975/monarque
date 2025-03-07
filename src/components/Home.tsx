import Hero from "./Hero"
import HomeSection2 from "./HomeSection2"
import HomeProducts from "./HomeProducts"
import Team from "./Team"
import WhyTrust from "./WhyTrust"
import ContactUs from "./ContactUs"

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeSection2></HomeSection2>
            <HomeProducts></HomeProducts>
            <Team id="team"></Team>
            <WhyTrust></WhyTrust>
            <ContactUs id="contact"></ContactUs>
        </div>
    )
}

export default Home