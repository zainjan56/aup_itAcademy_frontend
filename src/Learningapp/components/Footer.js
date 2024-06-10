import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row firstRow">
        <div className="col-sm-6">
          <p className="connectTxt">
            Get connected with us on social networks:
          </p>
        </div>
        <div className="col-sm-6">
          <div className="iconsArea">
            <tr>
              <td>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icons"/></a>
              </td>
              <td>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icons"/></a>
              </td>
              <td>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><AiFillGoogleCircle className="icons"/></a>
              </td>
              <td>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icons"/></a>
              </td>
              <td>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin className="icons"/></a>
              </td>
              <td>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icons"/></a>
              </td>
            </tr>
          </div>
        </div>
      </div>
      <div className="row secondRow">
        <div className="col-sm-4 footerColumn">
          <b>
            <FaGraduationCap size={30} className="iconOne" />
            ONLINE EDUCATION
          </b>
          <p className="textFooter">
            We are happy to see you here, please select courses according to
            your choice and polish your skills for job's test and interviews.
          </p>
        </div>
        <div className="col-sm-4 footerColumn">
          <b>
            <ImBooks size={25} className="iconOne" />
            COURSES
          </b>
          <br />
          <div className="linksArea">
            <Link className="footerLinks">HTML</Link>
            <br />
            <Link className="footerLinks">CSS</Link>
            <br />
            <Link className="footerLinks">JavaScript</Link>
            <br />
            <Link className="footerLinks">React JS</Link>
            <br />
            <Link className="footerLinks">Node JS</Link>
          </div>
        </div>

        <div className="col-sm-4 footerColumn">
          <b>
            <IoMdContact size={25} className="iconOne" />
            CONTACT
          </b>
          <div className="myAddresses">
          <p><i><HiHome /></i> Arbab Road Stop, Peshawar Pakistan</p>
          <a href={`mailto:engrzain66@gmail.com`} className="emailAddress"><i><MdEmail /></i> engrzain66@gmail.com</a>
          <p><BsFillTelephoneFill /> +92 302 5656720</p>
          <a href={`mailto:engrzain66@gmail.com`} className="emailAddress"><i><MdEmail /></i> fawad22@gmail.com</a>
          <p><BsFillTelephoneFill /> +92 304 6767921</p>
          </div>
        </div>
      </div>
      <div className="row thirdRow">
        <h6 id="copyrightarea">© 2023 Copyright: OnlineEducation.com</h6>
      </div>
    </footer>
  );
};

export default Footer;
