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

exports.search = (title, genre, year) =>{
    let result = movies.slice();

    if(title){
        result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    if(genre){
        result = result.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
    }

    if(year){
        result = result.filter(movie => movie.year === year);
    }

    return result;

} 

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);

    return movie;
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length -1]._id + 1; 
    movies.push(movieData)
}