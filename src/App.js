import './App.css';
import ShowCocktails from './ShowCocktails'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import CocktailDetails from './CocktailDetails';

function App() {
  return (
    <Container className="App">
      <Container>
        <header>
          <Image src="/bananacocktail (kopia).jpeg" fluid />
          <NavBar />
          <Routes>
            <Route path="nav/list" element={<ShowCocktails />} />
            <Route path="nav/search" element={<SearchBar />} />
          </Routes>
        </header>
      </Container>

      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </Container>
  )
}

export default App;