const album = JSON.parse(localStorage.albumID);
document.addEventListener("DOMContentLoaded", () => {
    // console.log()
    showPhotos();
});

// function showPhotos(){
//         const img = document.createElement("img");
//         img.src = "https://via.placeholder.com/600/771796"; 
//         const currentDiv = document.getElementById("posts_container");
//         console.log("4");
//         currentDiv.prepend(img)
// }
const showPhotos = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
    const albums = (((await(response.json()))))
    albums.map(object => {
        let img = document.createElement("img");
        img.src = object.url; 
        const currentDiv = document.getElementById("posts_container");
        currentDiv.prepend(img)
    });
}