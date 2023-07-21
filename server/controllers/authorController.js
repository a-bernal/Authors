const Author = require('../models/Author')

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch( err => res.status(400).json(err));
    },

    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(oneRecord => res.json(oneRecord))
            .catch( err => res.status(400).json(err));
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then( newAuthor => res.json(newAuthor))
            .catch( err => res.status(400).json(err));
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(updateAuthor => res.json(updateAuthor))
            .catch( err => res.status(400).json(err));
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deleteAuthor => res.json(deleteAuthor))
            .catch( err => res.status(400).json(err));
    }
}