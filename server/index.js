const express = require('express')
require('dotenv').config()
const fileUpload = require("express-fileupload")
const sequelize = require("./db")
const cors = require("cors")
const models = require("./models/models")
const routes = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddlware")
const path = require("path")


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`server is started, port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


const PORT = process.env.PORT || 7000;
const app = express();


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileUpload({}))
app.use("/api",routes) 
app.use(errorHandler);//end midware

app.get("/", (req,res)=>{
   res.status(200).json({res:"123"})
})


start();


