import React from 'react';
import { useSelector } from "react-redux";
import StudentHeader from './StudentHeader';
import StudentSidebar from './StudentSidebar';
import { Link } from 'react-router-dom';
import "../Teacher/Tprofile.css";
import adminpic from "../images/adminicon.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';

const StudentProfile = () => {
  const loginData = useSelector((state) => state.login);
  //console.log(loginData.items.id);
  const id = loginData.items.id;
  console.log(id);
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <StudentSidebar />
        <div className="container" style={{overflowY: "auto"}}><br />
          <div className="row">
            <div className="col-sm-12">
            <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={adminpic}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">C++</p>
                <p className="text-muted mb-4">Islamia College University Peshawar, Pakistan</p>
                <div className="justify-content-center">
                  <Link to='/studentpchange'><button className='btn btn-primary'>Edit</button></Link>
                  <Link to='/studentchangepass'><button className="btn btn-primary ms-1">Change Password</button></Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loginData.items.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loginData.items.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Islamia College University Peshawar, Pakistan</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile;