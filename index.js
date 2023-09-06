// Add your code here
const body = document.querySelector("body")
const p = document.createElement("p")
const p1 = document.createElement("p")
body.appendChild(p)
body.appendChild(p1)

const submitData = (name, email) => {
 return fetch("http://localhost:3000/users", {
    method: "POST",
    headers:{
        "Content-Type": 'application/json',
        Accept: "application/json"
        }, 
    body : JSON.stringify({ name, email})
        })
        .then(r =>r.json())
        .then(data=>{
            p.textContent = data.id
            console.log(data.id)})
        .catch(error=>{
            p1.textContent = error.message
            alert("Something something error");
            console.log(error.message)
        })
   
}