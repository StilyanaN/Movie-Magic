const Movie = require('../models/Movie');


exports.getAll = () => Movie.find()

exports.search = async (title, genre, year) =>{
    let result = await Movie.find().lean();

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

};

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData);

exports.attach = (movieId, castId) => {
    // const movie = await this.getOne(movieId);

    //movie.casts.push(castId);

    // return movie.save();
   return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
}


