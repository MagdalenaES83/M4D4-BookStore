import React from 'react'
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form,   } from "react-bootstrap";

class BookList extends React.Component {

    state = {  searchQuery : ""
    }
render () {
    return (  
        <Container>                              
                    <Row >   
                        <Col xs={12} lg={12} className="mb-5" > 
                        <Form.Control  type="text" placeholder="search"
                        value = {this.state.searchQuery} 
                        onChange ={e => this.setState({searchQuery: e.target.value}) }/>
                        </Col>
                    </Row>

                   <Row>  
                       
            
            {     
                this.props.books.filter(b=> b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (  
                <Col md={12} lg={12} id="BBB">
                <SingleBook book={b} /></Col> 
                
))      
             }
    </Row>     
    </Container>


    )


}
}


export default BookList