<template>
  <div id="login">
    <div>
        <div class="login-icon">
          <img src="@/assets/images/login.jpeg" alt="">
        </div>
        <form action="" id="form">
          <div class="user-wrap">
            <icon name="user" width="20" color="#999" height="20" ></icon>
            <mt-field  placeholder="请输入用户名或手机号"  v-model="username"></mt-field></div>
          <div class="password-wrap">
            <icon name="password" width="20" fill="#999" height="20"></icon>
            <mt-field  placeholder="请输入密码" type="password" v-model="password"></mt-field></div>
          <mt-button @click.prevent="login" size="large" type="primary">登陆</mt-button>
        </form>
        <div class="account">
          <router-link to="/forget">忘记密码</router-link> <router-link to="/register">注册账号</router-link> 
        </div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {
  Field,
  Button,
  Toast
} from 'mint-ui'
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login: function(){
      const _this= this
      this.$http({
        method: 'POST',
        url: '/api/login',
        data: {
          username: _this.username,
          password: _this.password
        }
      }).then(res => {
        let data = res.data
        if(data.success){
          Toast({
            message: '登陆成功',
            position: "middle",
            duration: 1500
          });
          this.$store.dispatch('setUserInfo', data)
          setTimeout(()=>{
            _this.$router.push('/index')
          },1500)
        }
      })
    }
  }
}
</script>
<style lang="less">
#form{
  width: 70%;
  margin: auto
}
.label{
  width: 50px;
}
.user-wrap, .password-wrap{
  display: flex;
  align-items: center;
}
.account{
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 10px auto 0;
  a{
    color: #666;
    text-decoration: none;
  }
}
.login-icon{
  width: 100%;
  margin-bottom: 10px;
  img{
    display: block;
    width: 100%;
  }
}
</style>
