// BankAccount Class
class BankAccount {

    // Private Property
    #balance;

    constructor(initialBalance) {

        if (initialBalance < 0) {

            throw new Error("Invalid initial balance");

        }

        this.#balance = initialBalance;

    }


    // Deposit Method
    deposit(amount) {

        if (amount <= 0) {

            throw new Error("Deposit amount must be positive");

        }

        this.#balance += amount;

        console.log("Deposited: ₹", amount);

    }


    // Withdraw Method
    withdraw(amount) {

        if (amount <= 0) {

            throw new Error("Withdrawal amount must be positive");

        }

        if (amount > this.#balance) {

            throw new Error("Insufficient balance!");

        }

        this.#balance -= amount;

        console.log("Withdrawn: ₹", amount);

    }


    // Get Balance
    getBalance() {

        return this.#balance;

    }

}


// Creating Account
const account1 = new BankAccount(10000);


// Valid Deposit
account1.deposit(5000);


// Valid Withdrawal
account1.withdraw(2000);


// Invalid Withdrawal
try {

    account1.withdraw(20000);

}

catch (error) {

    console.log("Transaction Failed:", error.message);

}


// Final Balance
console.log("Available Balance: ₹", account1.getBalance());