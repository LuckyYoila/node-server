const express = require('express')
const app = express()
const math = require("./math")
app.use(express.json())
app.set('view engine', 'ejs')

const myArray = [2]
const bvns = ["232234343234", "234234234221"]

app.get('/numbers', function (req, res) {
  const body = req.body
  // const query = req.query
  // const par = req.params
  console.log(body)
  const result = math.multiply(body.a, body.b)
  res.status(200).json({result: result})
})

app.post('/numbers', (req, res)=> {
    console.log(req.body)
    myArray.push(req.body.number)
    res.send("Successfully added" + req.body.number)
})

app.delete("/number/")
function myfunc(req, res){
     res.send("You hit the put route")
}

app.get("/verify", (req, res)=> {
    const providedBvn = req.query.bvn
    if (!providedBvn) return res.send("Please provide a BVN")
    console.log(providedBvn)
    const bvnIsfound = bvns.some((bvn)=> bvn == providedBvn)

    console.log("isbvnfound", bvnIsfound)
    if (bvnIsfound) return res.send("Yes BVN is found")
    else return res.send("No, BVN is not found")
}) 

app.put('/put', myfunc)

app.get('/login', (req, res)=> {



  res.render("login.ejs", {name: "Lucky"})
  // res.sendFile(__dirname + "/html/index.html")
})

app.listen(3000, ()=> console.log("Server is running on port 3000"))