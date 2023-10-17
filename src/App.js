import './App.css';
import ShowCocktails from './ShowCocktails'
import ShowButtons from './ShowButtons'
import 'bootstrap/dist/css/bootstrap.css';
import { CocktailProvider } from './CocktailProvider';
import ShowForm from './ShowForm';
import Container from 'react-bootstrap/Container'
import Header from './Header'

function App() {
    return (
      <div className="App">
        <Container>
        <header>
          <Header></Header>
        </header>
        </Container>
        <body>
        <CocktailProvider>
            <Container>
            <ShowForm></ShowForm>
            </Container>
          <ShowCocktails></ShowCocktails>
          </CocktailProvider>
           

        </body>
        <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
        </div>
    )
}

export default App;