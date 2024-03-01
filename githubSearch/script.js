const input = document.getElementById("type");
const btn = document.querySelector(".searchbtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.getElementById("joinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".location");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".website");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");

let img = document.createElement("img");
let block = document.querySelector(".mainimg");


btn.addEventListener("click", function(){
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl(){
        const response = await fetch(url);
        const data = await response.json();
       
        

        img.src = data.avatar_url;
        block.appendChild(img);
        block.computedStyleMap.border = "none";

        console.log(data);
        
        user.innerHTML = data.name;
        login.innerHTML = `@${data.login}`;
       
        repo.innerHTML = data.public_repos;
        follower.innerHTML = data.followers;
        followings.innerHTML = data.following


        locations.innerHTML = 
            data.location === "" || data.location === null
            ? "No Location"
            : data.location;
        
        twit.innerHTML = 
            data.twitter_username === "" || data.twitter_username === null
            ? "No Twitter"
            : data.twitter_username;

        websites.innerHTML = 
            data.blog === "" || data.blog === null
            ? "No website"
            : data.blog;

            
        companies.innerHTML = 
            data.company === "" || data.company === null
            ? "No companie"
            : data.company;

        gitBio.innerHTML = 
            data.bio === "" || data.bio === null
            ? "No bio"
            : data.bio;
    }
    getUrl();
    input.value = "";
});