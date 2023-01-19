const user = JSON.parse(localStorage.userinfo);
document.addEventListener("DOMContentLoaded", () => {
    showAlbums();
});


const showAlbums = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
    const albums = (((await(response.json()))))
    albums.map(object => {
        const newDiv1 = document.createElement("div");
        const newheader1 = document.createElement("p");
        newheader1.onclick = function(){
            let Title = this.innerHTML;
            const Album = JSON.stringify(albums.find((item)=> (item.title ===Title)))
            localStorage.albumID = Album;         
            window.location.href = "./Photos.html";   
        };
        const newContent1 = document.createTextNode(`${object.title}`);
        newheader1.appendChild(newContent1);
        newDiv1.appendChild(newheader1);
        const currentDiv = document.getElementById("posts_container");
        currentDiv.prepend(newDiv1)
    });
}


// function showPhotos(album) {
//     console.log(album.innerHTML)
// };

// const matchUser = async (event) =>{
//     try{
//         event.preventDefault();
//         const userEmail = document.getElementById("email").value;
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");  
//         const user = JSON.stringify(await( 
//           (await(response.json())).find(
//             (item)=> (item.email ===userEmail))))
//         if (user !== undefined){
//           localStorage.userinfo = user;
//           window.location.href = "./Albums.html";
