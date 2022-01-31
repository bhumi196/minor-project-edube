import "./Settings.css";
import { GrPhone } from "react-icons/gr";
import {
  MdOutlineDriveFileRenameOutline,
  MdLanguage,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { Container, Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { Button } from "../components";

const Settings = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

 
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("user-token").length ? true : false)
  }, [props.userToken])

  const handleLogout = () => {
    localStorage.setItem("user-token", "")
    setIsLoggedIn(false)
  }

  if (!isLoggedIn)
    return <Navigate to="/" />

  return (
    <div className="container-settings">
      <Container className="settings-main-header">
        <div className="settings-heading">
          Settings{" "}
          <span>
            <AiOutlineSetting />
          </span>
        </div>
        <Row>
          <Col className="settings-icon-col">
            <MdOutlineDriveFileRenameOutline className="settings-icon" />
            Name
          </Col>
          <Col className="setting-description">Amrit Matharu</Col>
        </Row>
        <Row>
          <Col className="settings-icon-col">
            {" "}
            <GrPhone className="settings-icon" />
            Phone
          </Col>
          <Col className="setting-description">+91 6267716004</Col>
        </Row>
        <Row>
          <Col className="settings-icon-col">
            <MdOutlineAccountCircle className="settings-icon" />
            Account
          </Col>
          <Col className="setting-description">aamritt8109</Col>
        </Row>

        <Row>
          <Col className="settings-icon-col">
            <MdLanguage className="settings-icon" />
            Language
          </Col>
          <Col className="setting-description">English</Col>
        </Row>

        <Row>
          <Col className="settings-icon-col">
            <FiHelpCircle className="settings-icon" />
            Help
          </Col>
        </Row>

        <Row>
          <Col className="settings-icon-col">
            <BsInfoCircle className="settings-icon" />
            About
          </Col>
        </Row>

        {props.userToken.length ? <Row>
          <Col className="settings-icon-col">
            <AiOutlineLogout className="settings-icon" />
            <Button style={{ color: "black", textDecoration: "none" }} onClick={handleLogout}>Log out</Button>
          </Col>
        </Row> : null}
      </Container>
      <Footer {...props} />
    </div>
  );
};

export default Settings;
