function fetchParties(){
    return fetch("http://localhost:8080/party/get").then(response => response.json());
}

let partyMap = new Map();

function createPartyMap(data){
    data.forEach(party => {
        partyMap.set(party.partyId, party)
    })
}

async function callFetchParties(){
    const promise = fetchParties();
    await promise.then(createPartyMap);
}