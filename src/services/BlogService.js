import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('books')
    },
    show(blogId) {
        return Api().get('book/' + blogId)
    },
    post(blog) {
        return Api().post('book', blog)
    },
    put(blog) {
        return Api().put('book/' + blog.id, blog)
    },
    delete(blog) {
        return Api().delete('book/' + blog.id, blog)
    },
}