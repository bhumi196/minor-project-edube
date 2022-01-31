import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Button, Card, TextInput, FormContainer, SmallText } from "../../components"
import { imageConstants } from "../../helpers/constants"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        const userDetails = {
            email,
            password: pass,
        };

        if (email === '') {
            // setError('Please enter your email!');
            return;
        }

        if (pass === '') {
            // setError('Please enter your password!');
            return;
        }
        axios
            .post(`http://localhost:3200/api/v1/users/login-demo`, userDetails)
            .then(res => {
                console.log('res->', res);
                if (res.status === 200) {
                    localStorage.setItem("user-token", res.data.token)
                    setIsLoggedIn(true)
                    console.log('login success')
                }
            })
            .catch(err => {
                console.log('login failed, err:-');
            });
    };
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("user-token").length ? true : false)
    }, [])

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="main-container">
            <img src={imageConstants.logo} alt="logo" className="logo" />
            <Card>
                <FormContainer>
                    <TextInput type="text" value={email} placeholder="Username or email" onChange={({ target: { value } }) => { setEmail(value) }} />
                    <TextInput type="text" value={pass} placeholder="Password" onChange={(text) => { setPass(text.target.value) }} />
                    <SmallText style={{ textAlign: "right" }}>Forgot Password?</SmallText>
                    <Button type="button" value="Login" onClick={handleLogin}>Log In</Button>
                    <SmallText style={{ margin: "3% auto" }}>Don't have an account? <Link to="/register">SIGN UP</Link></SmallText>
                </FormContainer>
            </Card>
        </div>
    )
}

export default Login