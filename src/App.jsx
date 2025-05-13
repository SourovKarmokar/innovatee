import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <Header>
        <Navbar></Navbar>
        <Banner></Banner>
      </Header>
    </>
  );
}

export default App;
