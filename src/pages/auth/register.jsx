import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, TextInput, FormContainer, SmallText } from "../../components"
import { imageConstants } from "../../helpers/constants"

const Register = () => {
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [pincode, setPincode] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="container">
            <img src={imageConstants.logo} alt="logo" className="logo" />
            <Card>
                <FormContainer>

                    <TextInput type="text" value={email} placeholder="Username or email" onChange={(text) => { setEmail(text) }} />
                    <TextInput type="text" value={fullname} placeholder="Full Name" onChange={(text) => { setFullname(text) }} />
                    <TextInput type="text" value={pincode} placeholder="Pin Code" onChange={(text) => { setPincode(text) }} />
                    <TextInput type="text" value={phone} placeholder="Phone" onChange={(text) => { setPhone(text) }} />
                    <TextInput type="text" value={pass} placeholder="Password" onChange={(text) => { setPass(text) }} />
                    <TextInput type="text" value={pass} placeholder="Confirm Password" onChange={(text) => { setPass(text) }} />
                    <Button type="button" value="Register" className="mt-3">Sign Up</Button>
                    <SmallText style={{ margin: "3% auto" }}>Already have an account? <Link to="./login">LOG IN</Link></SmallText>

                </FormContainer>
            </Card>
        </div>
    )
}

export default Register