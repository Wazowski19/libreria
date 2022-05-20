import express from 'express';
import { getBooks, /* insertBooks */ } from '../controllers/booksController.js';

const router = express.Router();

router.get('/books', getBooks);
/* router.post('/books', insertBooks) */


export default router;