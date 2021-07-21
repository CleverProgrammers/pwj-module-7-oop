const path = './data.json';
const fs = require('fs');
class Post {
    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividual(postId) {
        /** get individual Posts */
       const posts = this.readData();
       const foundPost = posts.find((post) => post.id = postId)
       return foundPost;  
    }
   
    addNewPost(newPost) {
       const currentData = this.readData();
       currentData.unshift(newPost);
       this.storeData(currentData);
    }

    storeData (rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(path, data);
    }

    readData() {
        let rawdata = fs.readFileSync(path);
        let posts = JSON.parse(rawdata);
        
        return posts;
    }

} 

module.exports = Post;