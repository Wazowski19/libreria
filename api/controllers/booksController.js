import connection from '../utils/database.js';

const getBooks = async (req, res) => {
  try {
    const books = await connection.select('*').from('books');
    //const category = await connection.select('*').from('category').join('books', 'books.category_id', 'category.books_id').where('category.category_id', '=', 1)
    return res.json({
      books,
      //category
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrio un error al consultar los libros',
    });
  }
};

export { getBooks };