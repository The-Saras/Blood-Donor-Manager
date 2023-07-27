import { Button } from "@mui/material";
import React from "react"
import { useNavigate } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import "../App.css"
import Donorstate from "./Donorstate";
import { useState } from "react";

const Home = (props) => {
    // const [isLoggedin, setLoggedin] = useState(false)
    // const token = localStorage.getItem("jwtToken");
    // if (token) {
    //     setLoggedin(true)
    // }
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Donorstate></Donorstate>
        </div>
    )

};

export default Home;
