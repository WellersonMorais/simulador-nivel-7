let movies = [];
let idCounter = 1;

// Criar filme
exports.createMovie = (req, res) => {
  const { title, description, year, genres, image, video } = req.body;

  const newMovie = {
    id: idCounter++,
    title,
    description,
    year,
    genres,
    image,
    video
  };

  movies.push(newMovie);

  return res.status(201).json(newMovie);
};

// Listar filmes
exports.getMovies = (req, res) => {
  return res.json(movies);
};

exports.getById = (req, res)=>{
    const { id } = req.params;

    const movie = movies.find(movie => movie.id ===  Number(id))

    res.json(movie)
}

// Atualizar filme
exports.updateMovie = (req, res) => {
  const { id } = req.params;

  const movie = movies.find(m => m.id == id);

  if (!movie) {
    return res.status(404).json({ message: "Filme não encontrado" });
  }

  const { title, description, year, genres, image, video } = req.body;

  movie.title = title ?? movie.title;
  movie.description = description ?? movie.description;
  movie.year = year ?? movie.year;
  movie.genres = genres ?? movie.genres;
  movie.image = image ?? movie.image;
  movie.video = video ?? movie.video;

  return res.json(movie);
};

// Deletar filme
exports.deleteMovie = (req, res) => {
  const { id } = req.params;

  const index = movies.findIndex(m => m.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Filme não encontrado" });
  }

  movies.splice(index, 1);

  return res.status(204).send();
};