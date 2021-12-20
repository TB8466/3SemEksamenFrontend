async function deleteCandidate(id){
        const URL = "http://localhost:8080/candidate/delete/"+id;

        const deleteMapObj = {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: ""
        }
        await fetch(URL, deleteMapObj);
        location.href = "show-candidates.html";
}