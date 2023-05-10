const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

   try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, firsname: username},
        {headers: {"private-key" :'beaa381d-ddeb-4e57-a919-110d9d1c8392'}}
    )
    return res.status(r.status).json(r.data)
   }catch(e){
    return res.status(e.response.status).json(e.response.data)
   }
});  
app.listen(3001);