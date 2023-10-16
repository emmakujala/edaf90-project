import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert} from 'react-bootstrap/Button';

export default function ShowButtons() {

    return (
        <div>
        <Alert variant="success"> SuccessButton </Alert>
        <Button>Vodka</Button> {'  '}
        <Button>Gin</Button> {'  '}
        <Button>Rum</Button> {'  '}
        <Button>Tequila</Button>
        </div>
    )
}