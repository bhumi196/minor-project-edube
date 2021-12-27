import { Link } from "react-router-dom"
import { Button, SmallText } from "../../components"
import { imageConstants } from "../../helpers/constants"

const Home = () => {
    return (
        <div className="homePage">
            <div className="small-logo-container">
                <img src={imageConstants.smallLogo} alt="smallLogo" className="smallLogo" />
            </div>
            <div className="welcome-to-edube">Welcome to Edube</div>
            <SmallText className="visual-social">A Visual Social Bookmarking</SmallText>
            <Link to="/login"><Button type="button" value="Login" >Log In</Button></Link>
            <hr className="hr-text" data-content="OR"></hr>
            <Link to="/register"><Button type="button" value="Register" >Sign Up</Button></Link>
        </div>
    )
}

export default Home