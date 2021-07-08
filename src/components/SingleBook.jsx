import {Container,  Row, Col, Image } from 'react-bootstrap'

const SingleBook =(props) => (


<Container> 
<Row > 

  <Col md={10} key={props.book.asin}>
Title: <b>{props.book.title}</b>

 </Col>
<Col md={2}> Price: {props.book.price}</Col>
 </Row>   
</Container>

)

  
export default SingleBook