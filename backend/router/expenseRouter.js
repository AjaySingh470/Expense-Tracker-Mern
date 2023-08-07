const { createExpense, deleteExpense, getCategoryExpense, getAllExpenses, emailSender } = require('../controller/expenseController');

const router = require('express').Router();

router.post('/addExpense',createExpense)
router.post('/deleteExpense',deleteExpense)
router.get('/categoryExpense',getCategoryExpense)
router.post('/allExpenses',getAllExpenses)
router.post('/sendEmail',emailSender);

module.exports = router;