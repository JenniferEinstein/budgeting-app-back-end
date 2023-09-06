const db = require("../db/dbconfig");

// === GET ALL TRANSACTIONS ===
const getAllTransactions = async() => {
    try{
        const allTransactions = await db.any("SELECT * FROM transactions");
        return allTransactions;
    } catch (error) {
        return ("There was an error getting all the transactions:", error);
    }
};


// === GET ONE TRANSACTION BY ID ===
const getOneTransaction = async(id) => {
    try {
        const singleTransaction = await db.one ("SELECT * FROM transaction WHERE id=$1", id);
        return singleTransaction;
    } catch (error) {
        return ("There was an error getting this transaction.", error);
    } 
};

// CREATE A NEW TRANSACTION
const createNewTransaction = async(transaction) => {
    try {
        const newTransaction = await db.one(
            "INSERT INTO transacations (date, from, item_name, category, amount, payment_type, tax_related, notes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [transaction.date, transaction.from, transaction.item_name, transaction.category, transaction.amount, transaction.payment_type, transaction.tax_related, transaction.notes]
        );
        return newTransaction;
    }   catch (error) {
        return ("There was an error making a new transaction", error);
    }
};

// DELETE A TRANSACTION
const deleteTransaction = async(id) => {
    try{
        const deletedTransaction = await db.one(
            "DELETE FROM transactions WHERE id = $1 RETURNING *", id
        );
        return deletedTransaction;
    } catch (error) {
        return ("There was a problem when yout ried to delete that transaction.", error);
    }
}

// UPDATE-EDIT A TRANSACTIONS
const updateTransaction = async(id, transaction) => {
    try { 
        const updatedTransaction = await db.one(
            "UPDATE transactions SET date=$1, from=$2, item_name=$3, category=$4, amount=$5, payment_type=$6, tax_related=$7, notes=$8 WHERE id=$9 RETURNING *",
            [transaction.date, transaction.from, transaction.item_name, transaction.category, transaction.amount, transaction.payment_type, transaction.tax_related, transaction.notes, id]
            )
                return updatedTransaction;
    }   catch(error) {
        return("There was a problem updating this transaction.", error)
    }
};

module.exports = {
    getAllTransactions,
    getOneTransaction,
    createNewTransaction,
    deleteTransaction,
    updateTransaction
}