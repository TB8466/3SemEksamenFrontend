function fetchCandidates(){
    return fetch("http://localhost:8080/candidate/get").then(response => response.json());
}

let candidateMap = new Map();

function createCandidateMap(data){
    data.forEach(candidate => {
        candidateMap.set(candidate.candidateId, candidate)
    })
}

async function callFetchCandidates(){
    const promise = fetchCandidates();
    await promise.then(createCandidateMap);
}