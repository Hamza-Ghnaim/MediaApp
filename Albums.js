document.addEventListener("DOMContentLoaded", () => {
    retrieveID();
});

const retrieveID = ()=>{
    var urlObject = new URL(document.location.href);
    var params = urlObject.searchParams;
    var Id = params.get("id");
    showAlbums(Id);

}

const showAlbums = async (id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    const albums = (((await(response.json()))))
    albums.map(object => {
        const newDiv1 = document.createElement("div");
        const newheader1 = document.createElement("p");
        newheader1.onclick = function(){
            let Title = this.innerHTML;
            const Album = (albums.find((item)=> (item.title ===Title)))
            const ID = Album.id;
            window.location.href = "./Photos.html?id=" +ID;   
        };
        const newContent1 = document.createTextNode(`${object.title}`);
        newheader1.appendChild(newContent1);
        newDiv1.appendChild(newheader1);
        const currentDiv = document.getElementById("posts_container");
        currentDiv.prepend(newDiv1)
    });
}

