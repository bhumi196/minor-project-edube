import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Button, Card, TextInput, FormContainer, SmallText } from "../../components"
import { imageConstants } from "../../helpers/constants"
import axios from "axios"

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false)

    const handleSignUp = () => {

        const userObj = {
            name,
            email,
            password: pass,
            phone,
            zip: pincode,

        };

        axios
            .post(`http://localhost:3200/api/v1/users/register-demo`, userObj)
            .then(res => {
                console.log('res->', res);
                if (res.status === 200) {
                    console.log('createNewUser success')
                    setIsRegistrationSuccess(true)
                }
            })
            .catch(err => {
                console.log('createNewUser failed, err:-');
            });
    }

    if (isRegistrationSuccess) {
        return <Navigate to="/profile" />
    }

    return (
        <div className="main-container">
            <img src={imageConstants.logo} alt="logo" className="logo" />
            <Card>
                <FormContainer>

                    <TextInput type="text" value={email} placeholder="Username or email" onChange={(text) => { setEmail(text.target.value) }} />
                    <TextInput type="text" value={name} placeholder="Full Name" onChange={(text) => { setName(text.target.value) }} />
                    <TextInput type="text" value={pincode} placeholder="Pin Code" onChange={(text) => { setPincode(text.target.value) }} />
                    <TextInput type="text" value={phone} placeholder="Phone" onChange={(text) => { setPhone(text.target.value) }} />
                    <TextInput type="password" value={pass} placeholder="Password" onChange={(text) => { setPass(text.target.value) }} />
                    <Button type="button" value="Register" className="mt-3" onClick={handleSignUp}>Sign Up</Button>
                    <SmallText style={{ margin: "3% auto" }}>Already have an account? <Link to="/login">LOG IN</Link></SmallText>

                </FormContainer>
            </Card>
        </div>
    )
}

export default Register