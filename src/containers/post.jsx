import { Row, Col } from "react-bootstrap"
import { BiBookmark } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Card, SmallText, TextInput } from "../components";

const Post = ({ post: { profile, userName, postTime, postImage, description } }) => {


    const [addComment, setComment] = useState("")

    return (
        <Card className="p-3 my-4">
            <Row className="dashboard-pfp-row">
                <Col xs={3}>
                    <img src={profile} alt="pfp" className="dashboard-pfp" />
                </Col>
                <Col xs={9}>
                    <SmallText className="mb-0 mt-2">{userName}</SmallText>
                    <SmallText className="m-0">{postTime}</SmallText>
                </Col>
            </Row>
            <Row>
                <img src={postImage} alt="pfp" className="px-0 mt-1" />
            </Row>
            <Row className="dashboard-pfp-row">
                <SmallText className="px-0 mt-1 mb-0">
                    {description}
                </SmallText>
            </Row>
            <Row className="p-2">
                <Col className="photoIconRow"><AiOutlineLike className="dashboard-pfp-icon" /></Col>
                <Col className="photoIconRow"><AiOutlineComment className="dashboard-pfp-icon" /></Col>
                <Col className="photoIconRow"><AiOutlineShareAlt className="dashboard-pfp-icon" /></Col>
                <Col className="photoIconRow"><BiBookmark className="dashboard-pfp-icon" /></Col>
            </Row>
            <Row className="px-2">
                <TextInput type="text" value={addComment} placeholder="Add Your Comment" onChange={({ target: { value } }) => { setComment(value) }} />
            </Row>
        </Card>
    )
}

export default Post