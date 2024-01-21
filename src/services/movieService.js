const movies = [{
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

exports.create = (movieData) => {
    movies.push(movieData)
}