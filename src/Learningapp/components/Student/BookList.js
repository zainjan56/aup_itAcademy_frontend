import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentHeader from "./StudentHeader";
import StudentSidebar from "./StudentSidebar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsFillFilePdfFill } from "react-icons/bs";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/books/books"
        ); // Ensure this matches your backend URL and port
        console.log("BookList:::", response);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <StudentSidebar />
        <Container>
            <h1>Books List</h1>
            <Row xs={1} md={4} className="g-4">
         {
            books.map((book) => (
                <Col key={book._id}>
                  <Card className="booksCards">
                    <Card.Body>
                      <span className="booksPDFs">
                        <BsFillFilePdfFill color="red" size={45} onClick={()=>{window.open(`http://localhost:3001/${book.filePath}`)}}/>
                      </span><br/>
                      <h6><b>Book Name: </b>{book.title}</h6>
                      <h6><b>Auther Name: </b>{book.author}</h6>
                    </Card.Body>
                  </Card>
                </Col>
            ))
        }
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default BookList;
