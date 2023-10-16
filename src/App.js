import './App.css';
import ShowCocktails from './ShowCocktails'
import ShowButtons from './ShowButtons'
import 'bootstrap/dist/css/bootstrap.css';
import ShowCocktails from './ShowCocktails';

function App() {
    return (
        <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">DIN MAMMAS COCKTAILBAR</span>
        </header>
        <body>
            <ShowCocktails></ShowCocktails>
            <ShowButtons></ShowButtons>
        </body>
        <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
        </div>
    )
}

export default App;