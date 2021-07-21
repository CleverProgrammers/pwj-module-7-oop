const express = require("express");
const Post = require("./api/model/posts");
const app = express();

app.use((req,res,next) => {
 res.setHeader("Access-Control-Allow-Origin" , "*");
 next();
});

app.use('/uploads', express.static('uploads'));

const postData = new Post();

app.get("/api/posts", (req, res) => {
  res.status(200).send(postData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
  const postId = req.params.post_id;
  const foundData = postData.getIndividual(postId);
   if(foundData){
    res.status(200).send(foundData);
   } else {
       res.status(404).send("The Page not found");
   }
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
