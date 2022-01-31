import React from "react";
import "./Settings.css";
import { pfpConstants } from "../helpers/pfp";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Container, Col, Row } from "react-bootstrap";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "./footer";

const Profile = () => {
  return (
    <div className="pfpbg">
      <div className="div-profile-header">
        <b> <BiLockAlt />aamritt6104</b>
        <Container className="contain">
          <Row >
            <Col><img src={pfpConstants.pfp} alt="pfp" className="pfp" /></Col>
            <Col className="colcss">
              <Row><Col>14</Col>
                <Col> Posts</Col>
              </Row>
            </Col>
            <Col className="colcss">
              <Row><Col>144</Col>
                <Col>Connections</Col>
              </Row>
            </Col>

          </Row>
        </Container>
        <div className="usertext">
          <b>
            {" "}
            Amrit Kaur <MdOutlineDriveFileRenameOutline />
          </b>
          <br />
          Dreams comes true to those who truly want them
        </div>
        <hr />
        <div className="profiletext">
          <b>
            Experience
            <MdOutlineDriveFileRenameOutline />
          </b>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi
          ratione esse, dolorum dolor nulla labore.
          <br />
          <b>
            Posts<MdOutlineDriveFileRenameOutline />
          </b><br />
          <Container fluid>
            <Row>
              <Col xs="auto"><img src={pfpConstants.two} alt="pfp" className="postspic" /></Col>
              <Col xs="auto"><img src={pfpConstants.three} alt="pfp" className="postspic" /></Col>
              <Col xs="auto"><img src={pfpConstants.four} alt="pfp" className="postspic" /></Col>
              <Col xs="auto"><img src={pfpConstants.five} alt="pfp" className="postspic" /></Col>
              <Col className="plus"><AiOutlinePlus /></Col>
            </Row>
          </Container>
          <br />
          <b>
            Education
            <MdOutlineDriveFileRenameOutline />
          </b>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi
          ratione esse, dolorum dolor nulla labore.
          <br />
          <b>
            Skills
            <MdOutlineDriveFileRenameOutline />
          </b>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />{" "}
          <b>
            Interest
            <MdOutlineDriveFileRenameOutline />
          </b>
          <br />
          Lorem ipsum dolor sit amet consectetur
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
