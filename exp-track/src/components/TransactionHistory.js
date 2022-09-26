import React from "react";

// Handling history and using the delete transaction option
function TransactionHistory ({ transactions, onDeleteTransaction}) {
    return(
        <div>
            <h2>Transaction History</h2>
            <ul>
                {
                    transactions.map((data) => 
                        <li key={data.id}>
                            <div>{data.name}</div> 
                            <div>
                                <span> N{data.amount}</span>
                                <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;