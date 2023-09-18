require('dotenv').config()

import express from "express"
import path from "path"
import routes from "./routes/routes"
import connectToDb from "./database/db"


connectToDb()
const app = express()
const port = process.env.PORT 

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routes)


app.get("/", (req, res) => {
  res.render("index")
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
