<template>
  <div id="register">
    <prev-header title="注册"></prev-header>
    <div class="icon">
      <img src="@/assets/images/register.jpg" alt="">
      <h2>welcome to find</h2>
    </div>
    <form action="">
      <mt-field label="用户名:" placeholder="请输入用户名" v-ikeydown="username" v-model="username" ></mt-field>
      <mt-field label="昵称:" placeholder="请输入昵称" v-model="nickname"></mt-field>
      <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号:" placeholder="请输入手机号" v-pkeydown="mobile" v-model.number="mobile"></mt-field>
      <mt-field class="verify" label="短信验证码:" placeholder="请输入验证码" v-model="info"><mt-button :disabled="submit.disabled"  @click.prevent="verifyinfo"  :type="submit.type">{{submit.content}}</mt-button></mt-field>
      <mt-button @click.prevent="register" class="submit" size="large" type="primary">注册</mt-button>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import PrevHeader from "com/prevTop/prevTop";
import { Field, Button, Toast } from "mint-ui";
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      username: "123",
      nickname: "",
      password: "",
      mobile: "",
      info: "",
      submit: {
        disabled: false,
        type: "primary",
        content: "发送"
      }
    };
  },
  methods: {
    checkRule: function() {
      // console.log(ev)
    },
    verifyinfo: function() {
      const _this = this;
      this.$http({
        method: "POST",
        url: "/api/verityInfo",
        data: { mobile: _this.mobile }
      }).then(res => {
        console.log(res);
        let data = res.data;
        if (data.success) {
          this.submit.type = "default";
          this.submit.disabled = true;
          this.submit.content = `已发送(60)`;
          let index = 1;
          let intelval = setInterval(() => {
            this.submit.content = `已发送(${60 - index})`;
            if (index === 60) {
              clearInterval(intelval);
              this.submit.type = "primary";
              this.submit.disabled = false;
              this.submit.content = `发送`;
            }
            index++;
          }, 1000);
        }
        Toast({
          message: data.msg,
          position: "middle",
          duration: 1000
        });
      });
    },
    register: function(ev) {
      const _this = this;
      this.$http({
        method: "POST",
        url: "/api/register",
        data: {
          username: _this.username,
          nickname: _this.nickname,
          password: _this.password,
          mobile: _this.mobile,
          verifyCode: _this.info
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
  },
  components: {
    PrevHeader
  },
  directives: {
    ikeydown: {
      bind: function(el, str, vnode) {
        console.log(el, str, vnode);
        let inputNode = el.querySelector("input");
        console.log(inputNode.value);
        inputNode.setAttribute('maxlength',16)
        inputNode.onkeyup = function(ev) {
          vnode.context[str.expression] = this.value = this.value.replace(
            /(^_|[\W\./]*)|[^\w\./|_]/gi,
            ""
          );
        };
      }
    },
    pkeydown: {
      bind: function(el, bind, vnode) {
        let inputNode = el.querySelector("input");
        inputNode.setAttribute('maxlength',11)
        inputNode.onkeyup = function(ev) {
          vnode.context[bind.expression] = this.value = this.value.replace(
            /[^0-9]/gi,
            ""
          );
        };
      }
    }
  }
};
</script>
<style lang="less" scoped>
#register {
  .mint-cell-title {
    width: 90px;
    color: #666;
  }
}
.verify {
  .mint-field-core {
    flex: 0.75;
  }
  .mint-button {
    height: 27px;
    margin-left: 10px;
  }
}
.icon {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
  h2 {
    font-size: 20px;
    font-weight: normal;
    margin-top: 0;
    margin-left: -35px;
  }
}
.submit {
  margin-top: 10px;
}
</style>
