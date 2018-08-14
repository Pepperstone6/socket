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
      component: Index
    }
  ]
})
