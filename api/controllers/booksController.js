import connection from '../utils/database.js';

const getBooks = async (req, res) => {
  try {
    const books = await connection.select('*').from('books');
    const category = await connection.select('category_name').from('category').join('books_category', 'books_category.category_id', 'category.category_id').where('book_id', '=', 1)
    return res.json({
      books,
      category
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrio un error al consultar los libros',
    });
  }
};

/* const insertBooks = async (req, res) => {
  const { book } = req.body;

  try {
    const newUser = await connection('books').insert(book).returning('*');
    // const newUser = await connection.table('film').insert(user);
    return res.json({
      msg: 'Usuario registrado correctamente 😂',
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Error al registrar nuevo usuario',
    });
  }
}; */

export { getBooks, /* insertBooks */ };