import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Outlet } from 'react-router-dom';
import Footer from './Footer' 

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
