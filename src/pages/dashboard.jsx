import { Row } from "react-bootstrap"
import { SearchBar } from "../components";
import { imageConstants } from "../helpers/constants"

const Dashboard = () => {
    return (
        <div>
            <Row>
                <img src={imageConstants.smallLogo} alt="cornerLogo" className="cornerLogo" />
                <SearchBar />
            </Row>
        </div>
    )
}

export default Dashboard;