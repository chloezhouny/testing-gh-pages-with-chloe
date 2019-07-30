import axios from 'axios';
export default {
    findAll: function (search) {
        return axios.get(`/api/books/google/${search}`) // get all book by search term from google
    }
    // getSavedBooks: function () {
    //     return axios.get('/api/books/') // all saved books from db
    // },
    // saveBook: function (bookData) {
    //     return axios.post("/api/books", bookData) //save book to database
    // },
    // deleteBook: function (id) {
    //     return axios.delete(`/api/books/${id}`)
    // }
};