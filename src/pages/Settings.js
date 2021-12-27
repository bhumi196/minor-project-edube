import "./Settings.css";
import { AiOutlineSetting } from "react-icons/ai";
// import { IoIosArrowForward } from "react-icons/io";
// import { BiLockAlt } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrPhone } from "react-icons/gr";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Container, Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Settings = () => {
  return (
    <div class="containerl">
      <h1>
        Settings <AiOutlineSetting />
      </h1>
      <Container>
        <Row>
          <Col>
            <MdOutlineDriveFileRenameOutline />
            Name
          </Col>
          <Col style={{textAlign:"right"}}>Amrit Matharu</Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <GrPhone />
            Phone
          </Col>
          <Col style={{textAlign:"right"}}>+91 6267716004</Col>
        </Row>
        <Row>
          <Col>
            <MdOutlineAccountCircle />
            Connected account
          </Col>
          <Col style={{textAlign:"right"}}>aamritt8109</Col>
        </Row>

        <Row>
          <Col>
            <MdLanguage />
            Language
          </Col>
          <Col style={{textAlign:"right"}}>English</Col>
        </Row>
       
        <Row>
     
          <Col>
          <Button variant="light" style={{backgroundColor: "white", borderColor: "white", alignItems:"flex-start", justifyContent:"flex-start", alignSelf:"flex-start", textAlign:"flex-start",  display: "block",
    padding: "0"}}>
            <FiHelpCircle />
            Help
            </Button>
          </Col>
          
        </Row>
        
        
        <Row>
       
          <Col>
          <Button variant="light" style={{backgroundColor: "white", borderColor: "white", alignItems:"flex-start", justifyContent:"flex-start", alignSelf:"flex-start", textAlign:"flex-start" ,padding: "0", display: "block"}}>
            <BsInfoCircle />
            About
            </Button>
          </Col>
         
        </Row>
        
        
        <Row>
      
          <Col>
          <Button variant="light" style={{backgroundColor: "white", borderColor: "white", alignItems:"flex-start", justifyContent:"flex-start", alignSelf:"flex-start", textAlign:"flex-start" ,padding: "0", display: "block"}}>
            <AiOutlineLogout />
            Log out
            </Button> 
          </Col>
          
        </Row>
        
      </Container>
    </div>
  );
};

export default Settings;
