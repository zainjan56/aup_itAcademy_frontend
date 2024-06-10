import React from "react";
import StudentHeader from "../Student/StudentHeader";
import CourseSidebar from "./CourseSidebar";
import Table from "react-bootstrap/Table";
import "./TopicOne.css";
//import { useSelector } from "react-redux";

const TopicTwo = () => {
  //   const courseName = useSelector((state) => state.cart);
  //   console.log(courseName);
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <div className="container firstTopic">
          <br />
          <div className="row">
            <div className="col-sm-12">
              <h1>Video Lecture About DataTypes</h1>
              <div className="videoArea">
                <iframe
                  className="videoFrame"
                  width="580"
                  height="360"
                  src="https://www.youtube.com/embed/MiK5tamc-HE"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="courseMaterials">
                <h1>C++ DataTypes</h1>
                <p className="variables-details">
                  In C++, data types are declarations for variables. This
                  determines the type and size of data associated with
                  variables. For example,
                </p>
                <p className="variables-details">int age = 13;</p>
                <p className="variables-details">
                  Here, age is a variable of type int. Meaning, the variable can
                  only store integers of either 2 or 4 bytes.
                </p>
                <Table>
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Meaning</th>
                      <th>Size (in Bytes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>int</td>
                      <td>Integer</td>
                      <td>2 or 4</td>
                    </tr>
                    <tr>
                      <td>float</td>
                      <td>Floating-point</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>double</td>
                      <td>Double Floating-point</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>char</td>
                      <td>Character</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>wchar_t</td>
                      <td>Wide Character</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>void</td>
                      <td>Empty</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </Table>
                <h5>
                  Now, let us discuss these fundamental data types in more
                  detail.
                </h5>
                <h5 className="variables-details">1. C++ int</h5>
                <p className="variables-details">
                  The int keyword is used to indicate integers. Its size is
                  usually 4 bytes. Meaning, it can store values from -2147483648
                  to 2147483647. For example,
                </p>
                <p className="variables-details">int salary = 85000;</p>

                <h5 className="variables-details">
                  <b>2. C++ float and double</b>
                </h5>
                <p className="variables-details">
                  float and double are used to store floating-point numbers
                  (decimals and exponentials). The size of float is 4 bytes and
                  the size of double is 8 bytes. Hence, double has two times the
                  precision of float. To learn more, visit C++ float and double.
                  For example,
                </p>
                <p className="variables-details">
                  float area = 64.74; and double volume = 134.64534;
                </p>

                <h5 className="variables-details">
                  <b>3. C++ char</b>
                </h5>
                <p className="variables-details">
                  Keyword char is used for characters. Its size is 1 byte.
                  Characters in C++ are enclosed inside single quotes ' '. For
                  example,
                </p>
                <p className="variables-details">char test = 'h';</p>

                <h5 className="variables-details">
                  <b>4. C++ wchar_t</b>
                </h5>
                <p className="variables-details">
                  Wide character wchar_t is similar to the char data type,
                  except its size is 2 bytes instead of 1. It is used to
                  represent characters that require more memory to represent
                  them than a single char. For example,
                </p>
                <p className="variables-details">
                  wchar_t test = L'ם' // storing Hebrew character;
                </p>

                <h5 className="variables-details">
                  <b>5. C++ bool</b>
                </h5>
                <p className="variables-details">
                  The bool data type has one of two possible values: true or
                  false. Booleans are used in conditional statements and loops
                  (which we will learn in later chapters). For example,
                </p>
                <p className="variables-details">bool cond = false;</p>

                <h5 className="variables-details">
                  <b>6. C++ void</b>
                </h5>
                <p className="variables-details">
                  The void keyword indicates an absence of data. It means
                  "nothing" or "no value". We will use void when we learn about
                  functions and pointers. Note: We cannot declare variables of
                  the void type.
                </p>
                <p className="variables-details">bool cond = false;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicTwo;
