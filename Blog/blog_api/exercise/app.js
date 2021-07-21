const express = require("express");
const multer = require("multer");

const getExt = (mimeType) => {
  console.log(mimeType);
  switch(mimeType) {
    case "image/png":
      return ".png";
    case "image/jpeg":
      return ".jpeg"
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${file.fieldname}-${Date.now()}.${getExt(file.mimeType)}`);
  }
});


var upload = multer({storage: storage});
const Post = require("./api/model/posts");
const app = express();

app.use((req,res,next) => {
 res.setHeader("Access-Control-Allow-Origin" , "*");
 next();
});

app.use('/uploads', express.static('uploads'));

app.use(express.json());

const postData = new Post();

app.get("/api/posts", (req, res) => {
  res.status(200).send(postData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
  const postId = req.params.post_id;
  console.log(postId);
  const posts = postData.get();
  const foundData = posts.find((post) => post.id == postId);
   if(foundData){
    res.status(200).send(foundData);
   } else {
       res.status(404).send("The Page not found");
   }
});

app.post("/api/posts/", upload.single("post-image"), (req,res) => {
  const newPost = {
    "id" : Date.now(),
    "title" : req.body.title,
    "content": req.body.content,
    "post_image" : req.file.path,
    "added_date" : `${Date.now()}`
  }
  postData.addNewPost(newPost);
     res.status(201).send("newPost")
 })

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
