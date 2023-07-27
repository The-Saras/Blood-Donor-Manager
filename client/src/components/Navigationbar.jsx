import { Button } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Navigationbar = (props) => {
    const navigate = useNavigate()
    const [name, Setname] = useState("")
    useEffect(() => {
        function callback2(data) {
            if (data.name) {
                Setname(data.name)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }

        fetch("http://localhost:3000/me", {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("jwtToken")
            }
        }).then(callback1)
    }, []);

    if (!name) {
        return (
            <div>
                <header>
                    <h1>Blood Donation Hub</h1>
                    <p>Register as a donor and save lives. Find blood donors in your area.</p>
                    <a className="cta-button" onClick={() => {
                        navigate("/signup");
                    }}>Register as a Donor</a>

                </header>
                <div className="container">
                    <h2>Why Donate Blood?</h2>
                    <p>Donating blood is a selfless act that can save lives. Every drop counts. Join our community of donors and
                        make a difference today.</p>

                    <div className="features">
                        <div className="feature">
                            <div className="feature-icon">&#10084;</div>
                            <div className="feature-title">Save Lives</div>
                            <div className="feature-description">Your blood donation can save the lives of those in need, including
                                accident victims, surgical patients, and people with chronic illnesses.</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">&#128170;</div>
                            <div className="feature-title">Be a Hero</div>
                            <div className="feature-description">Become a hero in someone's life by donating blood and giving them a
                                chance to see another day.</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">&#127974;</div>
                            <div className="feature-title">Community Support</div>
                            <div className="feature-description">Join a caring community of donors who are making a positive impact on
                                society by helping those in need.</div>
                        </div>
                    </div>

                </div>

                {/* <Button onClick={() => {
                    navigate("/signup");
                }}>Signup</Button>
                <Button onClick={() => {
                    navigate("/login");
                }}>Login</Button> */}

            </div>
        )
    }
    else if (name) {
        return (
            <div>
                <header>
                    <h1>Blood Donation Hub</h1>
                    <p>Register as a donor and save lives. Find blood donors in your area.</p>
                    <span href="#registration" className="cta-button">Welcome, {name}</span>
                </header>

                <Button onClick={() => {
                    localStorage.removeItem('jwtToken');
                    window.location.reload(true);
                }}>Logout</Button>
            </div>
        )
    }

};

export default Navigationbar;
