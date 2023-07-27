const mongoose = require("mongoose")
const Db = "mongodb+srv://sarasjjoshi:pAhMpZu4etFr6eo2@cluster0.c0kz72z.mongodb.net/?retryWrites=true&w=majority"
const cnmg = () => mongoose.connect(Db, {
    useNewUrlParser: true,

}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log(err);
})


module.exports = cnmg;