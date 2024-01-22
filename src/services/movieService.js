const movies = [{
    _id: '1',
    title: 'Jungle Cruise',
    genre: 'Adventure',
    director: 'Spilberg',
    year: '2019',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Dreaming about saving countless lives and having another adventure'
}];

exports.getAll = () => {
    return movies.slice();
}

exports.getOne = (movieId) => {
    return movies.find(movie => movie._id == movieId);
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length -1]._id + 1; 
    movies.push(movieData)
}