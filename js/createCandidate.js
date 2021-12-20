async function wait4fetch(){
    await callFetchParties();
    fillDropDown();
}
wait4fetch();
const nameInp = document.getElementById("name");
const ageInp = document.getElementById("age");
const submit = document.getElementById("cButton");
const partyList = document.getElementById("partyList");

let postRequest = {
    method : "POST",
    headers : {
        "content-type" : "application/json"
    },
    body : ""
};

let candidateObj = {
    "candidateId" : "",
    "candidateName" : "",
    "candidateAge" : "",
    "party" : ""
};


function createCandidate(){
    candidateObj.candidateName = nameInp.value;
    candidateObj.candidateAge = ageInp.value;
    candidateObj.party = {partyId : partyList.value};

    postRequest.body = JSON.stringify(candidateObj);

    fetch("http://localhost:8080/candidate/save",postRequest).catch((error) => console.log(error));
    location.href = "create-candidate.html";
}

function fillDropDown(){
    for (let i of partyMap.keys()){
        const option = document.createElement("option");
        option.innerHTML = partyMap.get(i).partyName;
        option.value = partyMap.get(i).partyId;
        partyList.appendChild(option);
    }
}

submit.addEventListener("click" , createCandidate);