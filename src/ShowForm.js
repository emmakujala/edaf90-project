import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ShowForm()  {
    return (
        
        <Form>
  
            <Form.Group>
                <Form.Label>Sök efter cocktailrecept:</Form.Label>
                <Form.Control type="text" placeholder="sök..."/>
                <Form.Text className="text-muted">
                    Hoppas du hittar det du söker!
                </Form.Text>
            </Form.Group>
 
            <Button variant="secondary" type="submit">Sök
            </Button>
  
        </Form>

    )
}
