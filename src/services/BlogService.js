import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('books')
    },
    show(bookId) {
        return Api().get('book/' + blogId)
    },
    post(book) {
        return Api().post('book', blog)
    },
    put(book) {
        return Api().put('book/' + blog.id, blog)
    },
    delete(book) {
        return Api().delete('book/' + blog.id, blog)
    },
}