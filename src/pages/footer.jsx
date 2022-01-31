import { Col, Row } from "react-bootstrap"
import { AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = (props) => {
    const userToken = localStorage.getItem("user-token")
    return (
        <div className="dashboard-footer">
            <Row className="p-2">
                <Col><Link to="/dashboard"><AiOutlineHome className="dashboard-pfp-icon" /></Link></Col>
                <Col><Link to="/dashboard"><FaRegCommentDots className="dashboard-pfp-icon" /></Link></Col>
                <Col><Link to="/dashboard"><AiOutlinePlusSquare className="dashboard-pfp-icon" /></Link></Col>
                <Col><Link to="/profile"><CgProfile className="dashboard-pfp-icon" /></Link></Col>
                {userToken.length ? <Col><Link to="/settings"><FiSettings className="dashboard-pfp-icon" /></Link></Col> : null}
            </Row>
        </div>
    )
}

export default Footer