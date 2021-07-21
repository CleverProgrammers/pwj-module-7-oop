const path = './data.json';
const fs = require('fs');
class Post {
    get() {
        /** Get Posts */
        return this.readData();
    }
   
    addNewPost(newPost) {
       const currentData = this.readData();
       currentData.unshift(newPost);
       this.storeData(currentData);
    }

    

    readData() {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf8'));
        } catch (err) {
            console.error(err)
            return false;
        }
    }

    storeData (currentData) {
        try {
            fs.writeFileSync(path, JSON.stringify(currentData));
        } catch (err) {
            console.error(err)
        }
    }

} 

module.exports = Post;