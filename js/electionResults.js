async function wait4fetch(){
    await callFetchParties();
    printElection();
}
wait4fetch();

const party = document.getElementById("parties");
const reCount = document.getElementById("re-count");
const results = document.getElementById("results");

function printElection(){
   party.innerHTML ="";
   results.innerHTML="";
    let totalVotes = 0;
    const votes = document.createElement("h3");
    const totalVotesBar = document.createElement("div");
    for (let i of partyMap.keys()){
        let partyKey = partyMap.get(i);

        const partyName = document.createElement("h2");
        partyName.innerHTML = partyKey.partyName;

        const partyVotesLabel = document.createElement("label");
        partyVotesLabel.innerHTML = " Parties stemmer: "
        partyName.appendChild(partyVotesLabel);
        const partyVotes = document.createElement("p");
        let random = Math.floor(Math.random() * 100);
        partyVotes.innerHTML = random.toString();

        partyName.appendChild(partyVotes);

        party.appendChild(partyName);

        totalVotes += random;
        votes.innerHTML = "Stemmer i alt: "+totalVotes.toString();

        const voteBar = document.createElement("div");
        voteBar.innerHTML = random+"Stemmer "+partyKey.partyName;
        voteBar.style.width =  random + "%";
        results.appendChild(voteBar);
        totalVotesBar.innerHTML = "Stemmer i alt: "+totalVotes.toString();
        totalVotesBar.style.width = totalVotes +"%"
        results.appendChild(totalVotesBar)
    }
    party.appendChild(votes);
}
reCount.addEventListener("click" , printElection);
