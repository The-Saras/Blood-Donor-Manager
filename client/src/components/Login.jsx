import React, { useState } from "react"
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>



                <TextField id="outlined-basi1c" label="Email" variant="outlined" fullWidth={true} style={{ padding: 5 }}
                    onChange={e => {
                        setEmail(e.target.value);
                    }} /><br></br>

                <TextField id="outlined-basi1" label="Password" variant="outlined" fullWidth={true} type={"password"} style={{ padding: 5 }}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                /><br></br>



                <Button variant="contained" onClick={async () => {
                    try {
                        const User = {

                            email: email,
                            password: password,

                        }
                        const headers = {
                            'Content-Type': 'application/json',

                        };
                        const response = await axios.post("http://localhost:3000/login", JSON.stringify(User), { headers });
                        if (response) {

                            alert("Logged In succesfully");
                            console.log("hurre")
                            console.log(response.data.authToken)
                            localStorage.setItem('jwtToken', response.data.authToken);
                            navigate("/")
                        }


                    }
                    catch (err) {

                    }
                }}>Login</Button>

            </Card>
        </div>
    )
};

export default Login;
