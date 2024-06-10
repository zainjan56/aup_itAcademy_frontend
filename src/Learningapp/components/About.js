import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import zainpic from '../components/images/zain2.jpg';
import fawadpic from '../components/images/fawad1.png';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <section style={{ backgroundColor: "#f4f5f7" }}>
              <MDBContainer className="py-5 h-100">
                <MDBRow className="align-items-center h-100">
                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                      <MDBRow className="g-0">
                        <MDBCol
                          md="4"
                          className="gradient-custom text-center"
                          style={{
                            borderTopLeftRadius: ".5rem",
                            borderBottomLeftRadius: ".5rem",
                          }}
                        >
                          <MDBCardImage
                            src={zainpic}
                            alt="Avatar"
                            className="my-5"
                            style={{ width: "80px", borderRadius: "50%" }}
                            fluid
                          />
                          <MDBTypography tag="h5">Zain Ul Hassan</MDBTypography>
                          <MDBCardText>MERN Stack Web Developer</MDBCardText>
                          <MDBIcon far icon="edit mb-5" />
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Education</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Qualification</MDBTypography>
                                <MDBCardText className="text-muted">
                                  BSCS
                                </MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">University</MDBTypography>
                                <MDBCardText className="text-muted">
                                  ICUP
                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">
                                  engrzain66@gmail.com
                                </MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <MDBCardText className="text-muted">
                                  +923025656720
                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <div className="d-flex justify-content-start">
                              <a href="https://www.facebook.com/zainul.hassan.946517?mibextid=ZbWKwL">
                                <MDBIcon fab icon="facebook me-3" size="lg" />
                              </a>
                              <a href="https://x.com/ZainUlH35951198?t=1vXTSxDIiutnclhjS6yQMA&s=08">
                                <MDBIcon fab icon="twitter me-3" size="lg" />
                              </a>
                              <a href="https://instagram.com/engrzain66?igshid=cnRyamUycWJtMTVy">
                                <MDBIcon fab icon="instagram me-3" size="lg" />
                              </a>
                              <a href="https://www.linkedin.com/in/zain-ul-hassan-b320ba22a">
                                <MDBIcon fab icon="linkedin me-3" size="lg" />
                              </a>
                            </div>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>



                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                      <MDBRow className="g-0">
                        <MDBCol
                          md="4"
                          className="gradient-custom text-center"
                          style={{
                            borderTopLeftRadius: ".5rem",
                            borderBottomLeftRadius: ".5rem",
                          }}
                        >
                          <MDBCardImage
                            src={fawadpic}
                            alt="Avatar"
                            className="my-5"
                            style={{ width: "80px", borderRadius: "50%"}}
                            fluid
                          />
                          <MDBTypography tag="h5">Fawad Shah</MDBTypography>
                          <MDBCardText>Front-End Web Developer</MDBCardText>
                          <MDBIcon far icon="edit mb-5" />
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Education</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Qualification</MDBTypography>
                                <MDBCardText className="text-muted">
                                  BSCS
                                </MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">University</MDBTypography>
                                <MDBCardText className="text-muted">
                                  ICUP
                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">
                                fawadiii643@gmail.com
                                </MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <MDBCardText className="text-muted">
                                +923046767921
                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <div className="d-flex justify-content-start">
                              <a href="https://www.facebook.com/fawadshah.garwaki?mibextid=ZbWKwL">
                                <MDBIcon fab icon="facebook me-3" size="lg" />
                              </a>
                              <a href="https://x.com/Fawad_67?t=XcEBfQQ8IOC-P3hUNhrj1A&s=08">
                                <MDBIcon fab icon="twitter me-3" size="lg" />
                              </a>
                              <a href="https://www.linkedin.com/in/fawad-shah-093169241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <MDBIcon fab icon="linkedin me-3" size="lg" />
                              </a>
                            </div>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
