const mongoose = require('mongoose')

const RecipeSchema  = new mongoose.Schema({
    name: {type: String, required: true},
    decription: {type: String},
    ingredients: {type: String},
    imageUrl: {type: String},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
    }
})

const RecipeModel = mongoose.model("recipes", RecipeSchema)
module.exports = RecipeModel;