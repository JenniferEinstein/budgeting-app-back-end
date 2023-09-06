const express = require("express");
const transactions = express.Router();
const {
    getAllTransactions,
    getOneTransaction,
    createNewTransaction,
    deleteTransaction,
    updateTransaction
} = require("../queries/transactions");
const {
    checkDateExists, 
    checkAmountExists, 
    checkFromExists, 
    checkBoolean 
} = require("../validations/checkTransactions")


// === INDEX === 
transactions.get("/", async (req, res) => {
    try {
        console.log("/transactions - The index page. Index/GET/Read and Create/POST/Create!");
        
        const allTransactions = await getAllTransactions();
        
        if (allTransactions.length > 0) {
            res.status(200).json(allTransactions);
        } else {
            res.status(404).json({ error: "No transactions found" });
        }
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Server error getting all transactions at index page" });
    }
});




// === SHOW === 
transactions.get("/:id", async (req, res) => {
    console.log("/transactions:id - Show/GET/Read, Destroy/DELETE/Delete, and Update/PUT/Update)")
    const id = req.params.id;
    const transaction = await getOneTransaction(id);
    if(transaction) {
        res.json(transaction);
    } else {
        res.status(404).json({ error: "this transaction was not found" });
    }
});



// === CREATE === 
transactions.post("/", checkAmountExists, checkBoolean, checkDateExists, checkFromExists, async(req,res) => {
    try{
        const transaction = await createNewTransaction(req.body);
        res.json(transaction);
    } catch (error) {
        res.status(400).json({ error: "There was a problem creating this transaction"})
    }
})


// === DELETE === 
transactions.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    const deletedTransaction = await deleteTransaction(id);
    if (deletedTransaction && deletedTransaction.id) {
        res.status(200).json(deletedTransaction);
    } else {
        res.status(404).json("There was a problem deleting this transaction.")
    }
})



// === UPDATE / PUT === 
transactions.put("/:id", checkAmountExists, checkBoolean, checkDateExists, checkFromExists, async(req, res) => {
    const id = req.params.id;
    const updatedTransaction = await updateTransaction(id, req. body);
    res.status(200).json(updatedTransaction);
});


module.exports = transactions;