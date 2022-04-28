let email = "TSHXNG@GMAIL.COM";
let password = "SHANGWA";
const url = `http://localhost:8080/login/${email}/${password}`;


// OnSubmit
document.getElementById("submit")
.addEventListener("click", () => {
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    console.log(`Email: ${email}\nPassword: ${password}`)
    sendLogInDetails();
})


const grabInput = () => {
    email = document.getElementById("email").value
    password = document.getElementById("password").value
}

async function sendLogInDetails() {
    fetch(`http://localhost:8080/login/${email}/${password}`, { 
        method: "GET",
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById("con").innerHTML = `
             <h1>${data}</h1>
         `;
        console.log(data);
    })
    .catch((err) => console.log(err));
}

