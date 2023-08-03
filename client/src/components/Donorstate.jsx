import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react";
import Donor from "./Donor";

const Donorstate = (props) => {
    const [donors, setDonors] = useState([])

    const [city, setCity] = useState('');
    const [bg, setBg] = useState('')
    const headers = {
        "auth-token": localStorage.getItem("jwtToken"),
        'Content-Type': 'application/json',
    }
    const fetchDonors = async () => {
        try {

            const data = await fetch("http://localhost:3000/getusers", { headers });
            const jsonData = await data.json();
            console.log(jsonData.allUsers)
            setDonors(jsonData.allUsers)

        } catch (error) {
            console.error(error);
        }
    }


    const filteredDonors = async () => {
        try {
            const data = await fetch(`http://localhost:3000/filter?bg=${bg}&city=${city}`, { headers });
            const jsonData = await data.json();
            console.log(jsonData.filteredDonors)
            setDonors(jsonData.filteredDonors)
        }
        catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {

        fetchDonors();
    }, []);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField label="city" onChange={(e) => { setCity(e.target.value) }}></TextField>
                <TextField label="Blood Group" onChange={(e) => { setBg(e.target.value) }}></TextField>
                <Button variant="contained" onClick={() => { filteredDonors(); }}>Filter</Button>
            </div>
            {donors.map((value) => {

                return (

                    <Donor key={value._id} name={value.name} city={value.city} bg={value.bg}></Donor>
                )

            })}
        </div>
    )
};

export default Donorstate;
