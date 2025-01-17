

const registerBtn = document.querySelector("#registerbtn");

registerBtn.addEventListener("click", handleRegister);



function handleRegister(e){

    e.preventDefault();

    const user_name = document.querySelector("#user_name").value;

    const user_email = document.querySelector("#user_email").value;

    const user_password = document.querySelector("#user_password").value;

    const userObj = {
        user_name: user_name,
        user_email: user_email,
        user_password: user_password
    }
    sendData(userObj);
}

function sendData(userObj){

    const url = "http://localhost:4000/register";
    const options = {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch(url, options)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
       alert(data.message);
    
    });
}