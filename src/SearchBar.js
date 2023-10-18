import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useCocktailContext } from './CocktailProvider'
import {useState} from "react"
import { Outlet, useNavigate , Route, Routes} from 'react-router-dom';
import CocktailDetails from './CocktailDetails';

export default function SearchBar()  {

    const [searchTerm, setSearchTerm] = useState('');
    const {dispatch} = useCocktailContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(searchTerm)
        event.preventDefault();
        dispatch({ type: 'SET_SELECTED_COCKTAIL', payload: searchTerm })
        navigate('/search/details');
        
    }

    return (
        <div>
        
        <Form  onSubmit={handleSubmit}>
  
            <Form.Group>
                <Form.Label>Sök efter cocktailrecept:</Form.Label>
                <Form.Control type="text" 
                placeholder="sök..."
                onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <Form.Text className="text-muted">
                    Hoppas du hittar det du söker!
                </Form.Text>
            </Form.Group>
 
            <Button variant="secondary" type="submit" >Sök
            </Button>
  
        </Form>
        <Routes>
            <Route path="details" element={<CocktailDetails />} />
        </Routes>
        <Outlet />
        </div>
    )
}
