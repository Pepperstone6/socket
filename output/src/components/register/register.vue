<template>
  <div id="register">
    <form action="">
      <mt-field label="用户名:" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="昵称:" placeholder="请输入昵称" v-model="nickname"></mt-field>
      <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号:" placeholder="请输入手机号" v-model.number="mobile"></mt-field>
      <mt-button @click.prevent="register" size="large" type="primary">注册</mt-button>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Button, Toast } from "mint-ui";
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      username: "",
      nickname: "",
      password: "",
      mobile: ""
    };
  },
  methods: {
    register: function(ev) {
      const _this = this;
      // let obj = {
      //      username: _this.username,
      //     nickname:_this.nickname,
      //     password:_this.password,
      //     mobile:_this.mobile
      //   }
      this.$http({
        method: "POST",
        url: "/api/register",

        data: {
          username: _this.username,
          nickname: _this.nickname,
          password: _this.password,
          mobile: _this.mobile
        }
      }).then(res => {
        let data = res.data;
        if (data.msg === "注册成功") {
          Toast({
            message: `注册成功,将在5秒后自动返回登陆页`,
            position: "middle",
            duration: 1000
          });
          for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              if (i === 0) {
                _this.$router.push("/");
              } else {
                Toast({
                  message: `注册成功,将在${i}秒后自动返回登陆页`,
                  position: "middle",
                  duration: 1000
                });
              }
            }, (5 - i) * 1000);
          }
        } else {
          Toast({
            message: data.msg,
            position: "middle",
            duration: 1000
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
#register {
  .mint-cell-title {
    width: 75px;
    color: #666;
  }
}
</style>
