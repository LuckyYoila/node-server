const http = require('http'); 
const numbersList=[2]
const server = http.createServer(function(req, res){
  if (req.method == "GET"){
   return res.write("Hello")
  }

  if (req.method == "POST") {
    numbersList.push(req.body)
  }

  if (req.method == "DELETE"){
    numbersList.pop()
  }
  
  res.end()
});
server.listen(5000, ()=> console.log("server is listening on port 5000"));
