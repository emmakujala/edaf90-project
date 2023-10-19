import './App.css';
import ShowCocktails from './ShowCocktails'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import Footer from './Footer'
import Spirits from './Spirits'
import SpiritButtons from './SpiritButtons';
import RandomCocktail from './Random';

function App() {
  return (
    <Container className="App">
          <Image src="/bananacocktail (kopia).jpeg" fluid />
          <NavBar />
          <div style = {{padding: '14px', position: 'relative'}}/>
          <Routes>
            <Route path="/list/*" element={<ShowCocktails />} />
            <Route path="/search/*" element={<SearchBar />} />
            <Route path="/spirits/*" element={ <SpiritButtons /> } />
            <Route path= "/random/*" element={<RandomCocktail />} />
            <Route path = "/*" element = {<h3>Pick a menu option!</h3>}/> 
          </Routes>
          <div style = {{padding: '14px', position: 'relative', marginBottom: '44px'}}/>
      <Footer/>
    </Container>
  )
}

export default App;
