import React, { useState } from "react";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./TeacherAddBook.css";
import { Button } from "react-bootstrap";

const TeacherAddBook = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("author", author);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/books/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      NotificationManager.success(response.data.message, "", 3000);
      //console.log("Book uploaded successfully:", response.data.message);

      // Clear the input fields
      setFile(null);
      setTitle("");
      setAuthor("");
      document.querySelector('input[type="file"]').value = null;
    } catch (error) {
      //console.error("Error uploading book:", error);
      NotificationManager.error("Error Upload Book", "", 3000);
    }
  };
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <div className="container" style={{ overflowY: "auto" }}>
          <br></br>
          <div className="col-sm-12">
            <div className="row">
              <div className="Auth-form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <h3>Books Uploading Form</h3>
                  </div>
                  <div className="form-group mt-3">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={handleTitleChange}
                      required
                      className="form-control mt-1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Author:</label>
                    <input
                      type="text"
                      value={author}
                      onChange={handleAuthorChange}
                      required
                      className="form-control mt-1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Upload PDF:</label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                      className="form-control mt-1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <Button type="submit">Upload Book</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAddBook;
