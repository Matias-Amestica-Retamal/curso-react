import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de carrito
// import Placeholder from 'react-bootstrap/Placeholder';
import "./ItemListContainer.css";

function ItemListContainer() {
  return (
    <>
    <div className="container">
        <div className='row my-6'>
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="images/s24.webp" className="css-img" />
            <Card.Body>
              <Card.Title>SAMSUNG S24 Ultra</Card.Title>
              <Card.Text>
                <h5>#Celulares #5G #SAMSUNG</h5>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir</Button>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/alienware m16.jpeg"  className="css-img"  />
            <Card.Body>
              <Card.Title>DELL AlienWare</Card.Title>
              <Card.Text>
              <h5>#Notebooks #Gamer #DELL</h5>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Añadir</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/PS5.png"  className="css-img"/>
          <Card.Body>
            <Card.Title>SONY PS5 + Juego</Card.Title>
            <Card.Text>
            <h5>#Consolas #Gamer #SONY</h5>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Añadir</Button>
          </Card.Body>
        </Card>
        </div>
   

  
</div>
</>
  );
}

export default ItemListContainer;