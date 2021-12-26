import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, TextInput, FormContainer, SmallText } from "../../components"
import { imageConstants } from "../../helpers/constants"

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="container">
            <img src={imageConstants.logo} alt="logo" className="logo" />
            <Card>
                <FormContainer>
                    <TextInput type="text" value={email} placeholder="Username or email" onChange={({ target: { value } }) => { setEmail(value) }} />
                    <TextInput type="text" value={pass} placeholder="Password" onChange={(text) => { setPass(text.target.value) }} />
                    <SmallText style={{ textAlign: "right" }}>Forgot Password?</SmallText>
                    <Button type="button" value="Login" >Log In</Button>
                    <SmallText style={{ margin: "3% auto" }}>Don't have an account? <Link to="./register">SIGN UP</Link></SmallText>
                </FormContainer>
            </Card>
        </div>
    )
}

export default Login