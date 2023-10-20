import './App.css';
import ShowCocktails from './ShowCocktails'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import NavBar from './NavBar'
import { Routes, Route, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import Footer from './Footer'
import SpiritButtons from './SpiritButtons';
import RandomCocktail from './Random';

function App() {
  return (
    <Container className="App">
          <Image src="/bananacocktail (kopia).jpeg" fluid />
          <div style = {{padding: '14px', position: 'relative'}}/>
          <Outlet></Outlet>
          <div style = {{padding: '14px', position: 'relative', marginBottom: '44px'}}/>
      <Footer/>
    </Container>
  )
}

export default App;
