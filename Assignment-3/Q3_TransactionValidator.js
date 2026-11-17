"use strict";

// Transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays for valid and invalid transactions
let validTransactions = [];

let invalidTransactions = [];

// Custom error class
class TransactionError extends Error {

    constructor(message, type) {

        super(message);

        this.name = "TransactionError";

        this.type = type;
    }
}

// Validate transactions
for (let transaction of transactions) {

    try {

        // Check null transaction
        if (transaction === null) {

            throw new TransactionError(
                "Null transaction found",
                "NULL_ENTRY"
            );
        }

        // Check missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {

            throw new TransactionError(
                "Missing ID or Amount",
                "MISSING_DATA"
            );
        }

        // Check negative amount
        if (transaction.amount < 0) {

            throw new TransactionError(
                "Negative transaction amount",
                "NEGATIVE_AMOUNT"
            );
        }

        // Store valid transaction
        validTransactions.push(transaction);

        console.log("Valid Transaction:", transaction);

    } catch (error) {

        // Store invalid transaction
        invalidTransactions.push({
            transaction: transaction,
            error: error.message,
            type: error.type
        });

        console.log("Error Type:", error.type);

        console.log("Error Message:", error.message);
    }
}

// Final report
console.log("\n====== TRANSACTION REPORT ======");

console.log("Valid Transactions:", validTransactions);

console.log("Invalid Transactions:", invalidTransactions);

console.log("Successful Count:", validTransactions.length);

console.log("Failed Count:", invalidTransactions.length);

console.log("================================");