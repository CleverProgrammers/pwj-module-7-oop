

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method : 'GET'
    }).then(response => response.json())
    .then(data => buildPosts(data));
}

const buildPosts = (blogPosts) => {
    let BuildingPost = "";
    for (post of blogPosts) {
      // HINT: Convert the date number to a Date string 
    const convertDate = new Date(parseInt(post.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${post.post_image}`;
    BuildingPost +=`<div class="post">
    <div class="post-image" style="background-image: url(${postImage})"></div>
      <div class="post-content">
          <div class="post-date">${convertDate}</div>
          <div class="post-title"><h4>${post.title}</h4></div>
          <div class="post-text">${post.title}</div>
        </div>
    </div>`
    }
    document.querySelector('.blog-post').innerHTML = BuildingPost;
}