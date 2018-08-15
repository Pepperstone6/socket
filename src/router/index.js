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
Vue.use(Router)

export default new Router({
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
