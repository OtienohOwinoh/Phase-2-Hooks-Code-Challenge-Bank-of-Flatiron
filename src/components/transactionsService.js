let baseUrl = "http://localhost:8001"

export default function getTransactions() {
    return fetch(baseUrl+"/transactions").then( (res)=> res.json())
}

export const addTransaction = (transaction) => {

    let postBody = JSON.stringify({
        date: transaction.date,
        description: transaction.description,
        category: transaction.category,
        amount: transaction.amount,
    })


    console.log(postBody);

    return fetch(baseUrl + "/transactions",
    {method: "POST", 
    headers: {"Content-Type": "application/json"},
    body: postBody}
    
    ).then(response => {
        response.json()
        console.log(response)
    })
}
