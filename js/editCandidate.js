const editMode = document.getElementById("editModeButton");

function editModeActive(){
    parties.innerHTML ="";

    const candidateList = document.createElement("h2");
    candidateList.innerHTML = "Kandidater:";

    for (let i of candidateMap.keys()){
        let candidateKey = candidateMap.get(i);


        const candidateName = document.createElement("h3");
        candidateName.innerHTML = candidateKey.candidateName;
        const editName = document.createElement("input");
        editName.value = candidateKey.candidateName;
        candidateName.appendChild(editName)
        candidateList.appendChild(candidateName);

        const candidateAge = document.createElement("h3");
        candidateAge.innerHTML = candidateKey.candidateAge+" år gammel";
        const editAge = document.createElement("input");
        editAge.value = candidateKey.candidateAge;
        candidateAge.appendChild(editAge)
        candidateList.appendChild(candidateAge);

        const candidateParty = document.createElement("h3");
        candidateParty.innerHTML = candidateKey.party.partyName;
        const editParty = document.createElement("select");

        for (let i of partyMap.keys()){
            const option = document.createElement("option");
            option.innerHTML = partyMap.get(i).partyName;
            option.value = partyMap.get(i).partyId;
            editParty.appendChild(option);
            candidateParty.appendChild(editParty)
        }
        candidateList.appendChild(candidateParty);

        const submitEdit = document.createElement("button");
        submitEdit.innerHTML = "Udfør";
        submitEdit.onclick = function (){
            editCandidate(candidateKey.candidateId, editName.value, editAge.value, editParty.value);
        }
        candidateList.appendChild(submitEdit);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Slet kandidat";
        deleteButton.onclick = function (){
            deleteCandidate(candidateKey.candidateId);
        }
        candidateList.appendChild(deleteButton);

        const lineBreak = document.createElement("br");

        candidateList.appendChild(lineBreak)
        parties.appendChild(candidateList);

    }
}

editMode.addEventListener("click", editModeActive);

async function editCandidate(id, newName, newAge, newParty){
    const URL = "http://localhost:8080/candidate/edit/"+id;

    const updatedMovieJson = {
        "candidateId": id,
        "candidateName": newName,
        "candidateAge": newAge,
        "party" : {partyId: newParty}
    }

    const updateMapObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMovieJson)
    }
   await fetch(URL, updateMapObj)
    location.href = "show-candidates.html";
}