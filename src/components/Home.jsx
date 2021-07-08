import { Card, Button, Container, Col, Row } from "react-bootstrap"
import books from '../BOOKS/horror.json'


const Home = () => (
  <Container>
    <Row className="justify-content-center mt-5">

      {
books.map(book => ( <Col md={4} lg={3}>
<Card key={book.asin} style={{ width: '' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>Category: {book.category}</Card.Text>
    <Button variant="danger m-1">{book.price}</Button>

  </Card.Body>
</Card></Col>
))
   }

</Row>
</Container>
)

export default Home

