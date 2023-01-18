const matchUser = async (event) =>{
  try{
      event.preventDefault();
      const userEmail = document.getElementById("email").value;
      const response = await fetch("https://jsonplaceholder.typicode.com/users");  
      const user = JSON.stringify(await( 
        (await(response.json())).find(
          (item)=> (item.email ===userEmail))))
      if (user !== undefined){
        localStorage.userinfo = user;
        window.location.href = "./Albums.html";
      }
      else{
        throw new Error("Please enter a valid Email");  
      }
    }
    catch(err){
      alert(err)
    }
}





