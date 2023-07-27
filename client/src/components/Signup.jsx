import React, { useState } from "react"
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bg, setBg] = useState('');
    const [city, setCity] = useState('')
    return (

        <div style={{ display: "flex", justifyContent: "center" }}>

            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>

                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} type={'text'} style={{ padding: 5 }}
                    onChange={e =>
                        setName(e.target.value)}
                /><br></br>

                <TextField id="outlined-basi1c" label="Email" variant="outlined" fullWidth={true} style={{ padding: 5 }}
                    onChange={e => {
                        setEmail(e.target.value);
                    }} /><br></br>

                <TextField id="outlined-basi1" label="Password" variant="outlined" fullWidth={true} type={"password"} style={{ padding: 5 }}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                /><br></br>

                <TextField id="outlined-1basic" label="Blood Group" variant="outlined" fullWidth={true} style={{ padding: 5 }}
                    onChange={e => {
                        setBg(e.target.value);
                    }}
                /><br></br>

                <TextField id="outlined-ba1sic" label="City" variant="outlined" fullWidth={true} style={{ padding: 5 }}
                    onChange={e => {
                        setCity(e.target.value);
                    }} /><br></br>

                <Button variant="contained" onClick={async () => {
                    try {
                        const User = {
                            name: name,
                            email: email,
                            password: password,
                            bg: bg,
                            city: city
                        }
                        const headers = {
                            'Content-Type': 'application/json',

                        };
                        const response = await axios.post("http://localhost:3000/signup", JSON.stringify(User), { headers });
                        if (response) {

                            alert("User Created succesfully");
                            console.log("hurre")
                            console.log(response.data.authToken)
                            localStorage.setItem('jwtToken', response.data.authToken);

                            navigate("/")
                        }


                    }
                    catch (err) {

                    }
                }}>Signup</Button>
                <span style={{ padding: 20 }}>Already a User?</span>
                <Button onClick={() => {
                    navigate("/login")
                }}>Login</Button>
            </Card>
        </div >
    )
};

export default Signup;
