import Hero from "./Hero"
import HomeSection2 from "./HomeSection2"
import HomeProducts from "./HomeProducts"
import Team from "./Team"
import WhyTrust from "./WhyTrust"
import ContactUs from "./ContactUs"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => { // Delay ensures the DOM is loaded before scrolling
                const section = document.getElementById(location.state.scrollTo);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });

                    // ✅ Remove state from history to prevent auto-scrolling on refresh
                    navigate(".", { replace: true, state: {} });
                }
            }, 200); 
        }
    }, [location, navigate]);
    
    return (
        <div className="">
            <Hero id="hero"></Hero>
            <HomeSection2></HomeSection2>
            <HomeProducts></HomeProducts>
            <Team id="team"></Team>
            <WhyTrust></WhyTrust>
            <ContactUs id="contact"></ContactUs>

            
        </div>
    )
}

export default Home