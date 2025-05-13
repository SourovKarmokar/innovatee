import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
function App() {
  return (
    <>
        <Header>
          <Navbar></Navbar>
          <Banner></Banner>
        </Header>
        
        
        <Content></Content>
      
    </>
  );
}

export default App;
