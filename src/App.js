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
import RandomCocktail from './Random';

function App() {
  return (
    <Container className="App">
      <Container>
        <header>
          <Image src="/bananacocktail (kopia).jpeg" fluid />
          <NavBar />
          <Routes>
            <Route path="/list/*" element={<ShowCocktails />} />
            <Route path="/search/*" element={<SearchBar />} />
            <Route path="/spirits/*" element={ <Spirits /> } />
            <Route path= "/random/*" element={<RandomCocktail />} />
          </Routes>
        </header>
      </Container>
      <Footer></Footer>
    </Container>
  )
}

export default App;