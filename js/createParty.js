const nameInp = document.getElementById("name");
const submit = document.getElementById("pButton");

let postRequest = {
    method : "POST",
    headers : {
        "content-type" : "application/json"
    },
    body : ""
};

let partyObj = {
    "partyId" : "",
    "partyName" : ""
};


function createParty(){
    partyObj.partyName = nameInp.value;

    postRequest.body = JSON.stringify(partyObj);

    fetch("http://localhost:8080/party/save",postRequest).catch((error) => console.log(error));
    location.href = "create-party.html";
}

submit.addEventListener("click" , createParty);