/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
}

// fetch(API_URL, {
//     method : 'GET'
// }).then(response => response.json())
// .then(data => buildPosts(data));
// }

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const URL = API_URL + `${postId}`;
    console.log(URL)
    fetch(URL,{ method : 'GET'
     }).then(response => response.json())
    .then(data => buildPost(data));
 }

const getPostIdParam = () => {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    return searchParams.get("id");
}

const buildPost = (data) => {
    console.log(data);
    const postImage = API_BASE_URL + data.post_image;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    const date = new Date(parseInt(data.added_date)).toDateString();
    document.getElementById("individual-post-title").innerHTML = data.title;
    document.getElementById("individual-post-date").innerHTML = date;
    document.getElementById("individual-post-content").innerHTML = data.content;
}




