import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useCocktailContext } from './CocktailProvider'
import { Outlet, useNavigate } from 'react-router-dom';

export default function SearchBar()  {

    const {state, dispatch} = useCocktailContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SELECTED_COCKTAIL', payload: state.searchTerm })
        navigate('/search/details');
        
    }

    return (
        <div>
        
        <Form  onSubmit={handleSubmit}>
  
            <Form.Group style = {{marginBottom: '14px'}}>
                <Form.Label>Search for a cocktail recipe:</Form.Label>
                <Form.Control type="text" style = {{ margin: '0 auto', maxWidth: '480px'}}
                placeholder="Type here..."
                onChange = {(e) => dispatch({type: 'SET_SELECTED_SEARCHTERM', payload: e.target.value})}
                />
            </Form.Group>
 
            <Button className="btn btn-warning text-white" variant="secondary" type="submit" >Search
            </Button>
        </Form>
        <Outlet />
        </div>
    )
}
