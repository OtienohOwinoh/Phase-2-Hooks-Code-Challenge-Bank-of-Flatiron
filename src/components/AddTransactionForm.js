import React from "react";
import addTransaction from "./transactionsService"


let baseUrl = "http://localhost:8001"


function AddTransactionForm({setTransactions}) {


const addNewTransaction = (e) => {

  e.preventDefault()

  let transaction = {
    date: document.querySelector("input[name='date']").value,
    description: document.querySelector("input[name='description']").value,
    category: document.querySelector("input[name='category']").value,
    amount: document.querySelector("input[name='amount']").value,
  }

  document.getElementById('myform').reset()


  let postBody = JSON.stringify({
    date: transaction.date,
    description: transaction.description,
    category: transaction.category,
    amount: transaction.amount,
    })
    console.log(postBody);
    
    fetch(baseUrl + "/transactions",
    {method: "POST", 
    headers: {"Content-Type": "application/json"},
    body: postBody}
        
    ).then(response => {
        response= response.json()
        setTransactions(prevTransactions => [...prevTransactions, transaction]);
    })


}








  return (
    <div className="ui segment">
      <form className="ui form" id="myform" onSubmit={addNewTransaction}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );

}

export default AddTransactionForm;
