const user = JSON.parse(localStorage.userinfo);
document.addEventListener("DOMContentLoaded", () => {
    showAlbums();
});

const showAlbums = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
    const albums = (((await(response.json()))))
    // console.log(albums);
    albums.map(object => {
        const newDiv1 = document.createElement("div");
        const newheader1 = document.createElement("h1");
        const newContent1 = document.createTextNode(`${object.title}`);
        newheader1.appendChild(newContent1);
        newDiv1.appendChild(newheader1);
        const currentDiv = document.getElementById("posts_container");
        currentDiv.prepend(newDiv1)
    });
}