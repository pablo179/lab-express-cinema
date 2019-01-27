//los modelos siempre van con mayusculas
let mongoose = require('mongoose')
let Schema= mongoose.Schema
//estructura
let movieSchema=new Schema({
    title :String,
    director: String,
    stars: [String],
    image: String,
    showtimes: [String]
});

module.exports = mongoose.model('Movie',movieSchema)