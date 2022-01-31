import { Col, Row } from "react-bootstrap";
import { TextInput } from "../components";
import { imageConstants, posts } from "../helpers/constants";
import Post from "../containers/post";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const Dashboard = ({ ...rest }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)


    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("user-token").length ? true : false)
    }, [rest.userToken])

    if (!isLoggedIn)
        return <Navigate to="/login" />

    return (
        <div className="dashboard-main">
            <div className="dashboard-header">
                <Row>
                    <Col xs={3}>
                        <img
                            src={imageConstants.smallLogo}
                            alt="cornerLogo"
                            className="cornerLogo"
                        />
                    </Col>
                    <Col xs={9}>
                        <TextInput
                            type="text"
                            id="header-search"
                            placeholder="Search blog posts"
                            name="s"
                            className=""
                        />
                    </Col>
                </Row>
            </div>
            <div className="dashboard-page">
                {posts.map(post => <Post post={post} />)}
            </div>
            {/* <div className="dashboard-footer">
                <Row className="p-2">
                    <Col><Link to="/dashboard"><AiOutlineHome className="dashboard-pfp-icon" /></Link></Col>
                    <Col><Link to="/dashboard"><FaRegCommentDots className="dashboard-pfp-icon" /></Link></Col>
                    <Col><Link to="/dashboard"><AiOutlinePlusSquare className="dashboard-pfp-icon" /></Link></Col>
                    <Col><Link to="/profile"><CgProfile className="dashboard-pfp-icon" /></Link></Col>
                    <Col><Link to="/settings"><FiSettings className="dashboard-pfp-icon" /></Link></Col>
                </Row>
            </div> */}
            <Footer {...rest} />
        </div>
    );
};

export default Dashboard;
