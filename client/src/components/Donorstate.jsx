import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react";
import Donor from "./Donor";

const Donorstate = (props) => {
    const [donors, setDonors] = useState([])
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
    useEffect(() => {
        fetchDonors();
    }, []);
    return (
        <div>
            {donors.map((value) => {

                return (

                    <Donor key={value._id} name={value.name} city={value.city} bg={value.bg}></Donor>
                )

            })}
        </div>
    )
};

export default Donorstate;
