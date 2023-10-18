import './App.css';
import ShowCocktails from './ShowCocktails'
import 'bootstrap/dist/css/bootstrap.css';
import { CocktailProvider } from './CocktailProvider';
import ShowForm from './SearchBar';
import Container from 'react-bootstrap/Container'
import Header from './Header'
import Image from 'react-bootstrap/Image'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import CocktailDetails from './CocktailDetails';

function App() {
  return (
    <Container className="App">
      <Container>
        <header>
          <Image src="bananacocktail (kopia).jpeg" fluid />
          <Header>
          </Header>
        </header>
      </Container>
      
      
        <NavBar />
        
        <Routes>
          
          <Route path="list*" element={<ShowCocktails />} />
          <Route path="search*" element={<SearchBar />} />
       
         
          {/* Other routes */}
        </Routes>
        {/* <Outlet></Outlet>
          <NavBar></NavBar>
          
            <Container> */}
        {/* <ShowForm></ShowForm> */}
        {/* </Container> */}
        {/* <ShowCocktails></ShowCocktails> */}




      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </Container>
  )
}

export default App;