require("dotenv").config()
const cors = require("cors")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors())
const connectMongo = require("./db")
const User = require("./model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { authenticateJwt } = require("./middelware/authUser");

connectMongo();

app.get("/me", authenticateJwt, async (req, res) => {

    try {
        const id = req.user.id;
        const userFound = await User.findById(id).select("-password");

        res.send(userFound)
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Some error occured while verufying your profile")
    }


})

app.post("/signup", async (req, res) => {
    const { name, email, password, bg, city } = req.body;
    const salt = await bcrypt.genSalt(10);

    const secPass = await bcrypt.hash(password, salt)
    const user = await User.create({
        name: name,
        email: email,
        password: secPass,
        bg: bg,
        city: city

    });
    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, process.env.TOKEN);
    res.json({ authToken });
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Enter valid details" });
        }
        const passwordCompare = bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Enter valid details" });

        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, process.env.TOKEN);
        res.json({ authToken });
    }
    catch (error) {
        console.log(error)
    }
})

app.get("/getusers", authenticateJwt, async (req, res) => {
    try {
        const allUsers = await User.find().select("-password").select("-email");
        return res.json({ allUsers })
    }
    catch (err) {
        console.error(err)
    }
});
// Filter donors by city and/or blood group
app.get('/filter', async (req, res) => {
    const { city, bg } = req.query;
    const filter = {};

    if (city) {
        filter.city = city;
    }

    if (bg) {
        filter.bg = bg;
    }

    try {
        const filteredDonors = await User.find(filter);
        res.json(filteredDonors);
    } catch (error) {
        console.error('Error filtering donors:', error);
        res.status(500).json({ error: 'Error filtering donors' });
    }
});


app.listen(3000, () => {
    console.log("app started on port 3000")
})
