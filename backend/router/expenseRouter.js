const { createExpense, deleteExpense, getCategoryExpense, getAllExpenses } = require('../controller/expenseController');

const router = require('express').Router();

router.post('/addExpense',createExpense)
router.post('/deleteExpense',deleteExpense)
router.get('/categoryExpense',getCategoryExpense)
router.post('/allExpenses',getAllExpenses)

module.exports = router;