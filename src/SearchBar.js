import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useCocktailContext } from './CocktailProvider'
import {useState} from "react"
import { Outlet, useNavigate } from 'react-router-dom';

export default function SearchBar()  {

    const [searchTerm, setSearchTerm] = useState('');
    const {setSelectedCocktail} = useCocktailContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(event.target.value)
        event.preventDefault();
        setSelectedCocktail(searchTerm);
        navigate('details');
        
    }

    return (
        <div>
        <Outlet></Outlet>
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
        </div>
    )
}
