const express = require('express');
const { getAllIssues, createIssue, updateIssue, deleteIssue } = require('../controllers/issuesController');

const router = express.Router();

router.get('/', getAllIssues);
router.post('/', createIssue);
router.put('/:id', updateIssue);
router.delete('/:id', deleteIssue);

module.exports = router;