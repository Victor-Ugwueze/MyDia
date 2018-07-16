import express from 'express';
import entries from '../models/entry';

const router = express.Router();

router.get('/api/v1/entries', (req, res) => {
  res.json(`entries: ${entries}`);
});

router.get('/api/v1/entries/1', (req, res) => {
  res.json(1);
});

module.exports = router;
