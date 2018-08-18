import Vue from 'vue'
import Router from 'vue-router'
// import Login from 'com/login/login'
const Login = (resolve) => {
  import('com/login/login').then(module => {
    resolve(module)
  })
}
const Forget = (resolve) => {
  import('com/forget/forget').then(module => {
    resolve(module)
  })
}
const Register = (resolve) => {
  import('com/register/register').then(module => {
    resolve(module)
  })
}
const Index = (resolve) => {
  import('com/index/index').then(module => {
    resolve(module)
  })
}

const Message = (resolve) => {
  import('com/message/message').then(module => {
    resolve(module)
  })
}
const Relative = (resolve) => {
  import('com/relative/relative').then(module => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('com/search/search').then(module => {
    resolve(module)
  })
}
const AddFrinend = (resolve) => {
  import('com/addFriend/addFriend').then(module => {
    resolve(module)
  })
}
const RequestAdd = (resolve) => {
  import('com/requestAdd/requestAdd').then(module => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  hash:"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/addfriend',
      name:'addfriend',
      component: AddFrinend
    },
    {
      path:'/requestadd',
      name:'requestadd',
      component:RequestAdd
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'message',
          component:Message
        },
        {
          path: 'relative',
          component:Relative
        },
        {
          path: 'look',
          component:Message
        },
        {
          path: 'dong',
          component:Message
        }
      ]
    }
  ]
})
