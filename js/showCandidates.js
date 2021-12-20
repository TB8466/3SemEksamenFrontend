async function wait4fetch(){
    await callFetchParties();
    await callFetchCandidates();
    showCandidates();
}
wait4fetch();

const sorter = document.getElementById("sort");
const parties = document.getElementById("parties");

function showCandidates(){
    parties.innerHTML ="";
    const candidateList = document.createElement("h2");
    candidateList.innerHTML = "Kandidater der stiller op til næste valg:";

    for (let i of candidateMap.keys()){
        let candidateKey = candidateMap.get(i);


        const candidateName = document.createElement("h3");
        candidateName.innerHTML = candidateKey.candidateName;
        candidateList.appendChild(candidateName);

        const candidateAge = document.createElement("h3");
        candidateAge.innerHTML = candidateKey.candidateAge+" år gammel";
        candidateList.appendChild(candidateAge);

        const candidateParty = document.createElement("h3");
        candidateParty.innerHTML = candidateKey.party.partyName;
        candidateList.appendChild(candidateParty);

        const lineBreak = document.createElement("br");

        candidateList.appendChild(lineBreak)
        parties.appendChild(candidateList);

    }


}


function showCandidatesByParty(){
    parties.innerHTML = "";
    for (let j of partyMap.keys()){
        const partyName = document.createElement("h2");
        partyName.innerHTML = partyMap.get(j).partyName;
        const candidateList = document.createElement("ul");
        candidateList.innerHTML = "Kandidater:";

        for (let i of candidateMap.keys()){
            let candidateKey = candidateMap.get(i);
        if(partyMap.get(j).partyId === candidateKey.party.partyId){
            const candidateName = document.createElement("li");
            candidateName.innerHTML = candidateKey.candidateName;
            candidateList.appendChild(candidateName);
        }
    }
        partyName.appendChild(candidateList);
        parties.appendChild(partyName);

    }
}

function printList(){
    switch (sorter.value){
        case "1" : showCandidates();
        break;
        case "2": showCandidatesByParty();
        break;
    }
}

sorter.addEventListener("change" , printList);