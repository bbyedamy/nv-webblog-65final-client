import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import BlogIndex from '@/components/Blog/Index'
import BlogEdit from '@/components/Blog/EditBlog'
import BlogShow from '@/components/Blog/ShowBlog'
import BlogCreate from '@/components/Blog/CreateBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BlogCreate
    },
    {
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BlogEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: BlogShow
    },
    {
      path: '/books',
      name: 'books',
      component: BlogIndex
    },
   

    

  ]
})
