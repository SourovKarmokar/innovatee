import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Features from "./components/Features/Features";
import Integrations from "./components/Integrations/Integrations";
import Services from "./components/Services/Services"
import Customers from "./components/Customers/Customers";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import TestimonialSlider from "./components/Testimonial/TestimonialSlider";
import Query from "./components/Query/Query";
function App() {
  return (
    <>
        <Header>
          <Navbar></Navbar>
          <Banner></Banner>
        </Header>
        
        
        <Content></Content>
        <Features />
        <Integrations />
        <Services />
        <Customers />
        <Pricing />
        <Testimonial />
        <Query />
        
    </>
  );
}

export default App;
