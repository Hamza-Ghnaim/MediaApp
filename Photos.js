document.addEventListener("DOMContentLoaded", () => {
    retrieveID();
});

const retrieveID = ()=>{
    var urlObject = new URL(document.location.href);
    var params = urlObject.searchParams;
    var ID = params.get("id");
    showPhotos(ID);
}

const showPhotos = async (id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    const albums = (((await(response.json()))))
    albums.map(object => {
        let img = document.createElement("img");
        img.src = object.url; 
        const currentDiv = document.getElementById("posts_container");
        currentDiv.prepend(img)
    });
}