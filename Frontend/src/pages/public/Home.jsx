import Navbar from "../../components/common/Navbar"
import Herobanner from "../../components/ui/HeroBanner"
// import Hero from "../../components/ui/Hero"
import Services from "../../components/Services/Services";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
export default function Home() {
  return (
    <>
      < Navbar />
       {/* <Hero /> */}
       <Herobanner />
       <Services/>
       <Clients/>
        <Contact/>
        <Footer />
       
    </>
  )
}