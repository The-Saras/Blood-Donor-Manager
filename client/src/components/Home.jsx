import { Button } from "@mui/material";
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import "../App.css"
import Donorstate from "./Donorstate";
import { useState } from "react";

const Home = (props) => {
    const [isLoggedin, setLoggedin] = useState(false)
    useEffect(() => {

        const token = localStorage.getItem("jwtToken");
        if (token) {
            setLoggedin(true)
        }
    }, [])

    return (
        <div>
            <Navigationbar></Navigationbar>
            {/* <Donorstate></Donorstate> */}
            {isLoggedin ? 
            
            <Donorstate /> : null}
        </div>
    )

};

export default Home;
