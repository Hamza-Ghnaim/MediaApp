const matchUser = async (event) =>{

  try{
      event.preventDefault();
      const userEmail = document.getElementById("email").value;
      const response = await fetch("https://jsonplaceholder.typicode.com/users");  
      const user =(await( 
        (await(response.json())).find(
          (item)=> (item.email ===userEmail))))
      if (user !== undefined){
        const ID = user.id;
        window.location.href = "./Albums.html?id=" +ID ;
      }
      else{
        throw new Error("Please enter a valid Email");  
      }
    }
    catch(err){
      alert(err)
    }
}





