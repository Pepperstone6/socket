<template>
  <div id="detailInfo">
      <prev-top title="详细信息"></prev-top>
       <div class="userinfo">
      <div @click="preview" class="icon">
        <img v-if="friendInfo" :src="friendInfo.avatar" alt="">
      </div>
      <div class="account">
        <div v-if="friendInfo" class="nickname">
          <span >{{friendInfo.nickname}}</span><icon width="20" height="15" :name="friendInfo.sex == 0 ? 'man':'woman'"></icon>
        </div>
      </div>
      <div class="p">
        <p></p>
      </div>
    </div>
    <div class="submit">
      <mt-button v-if="friendInfo&&!friendInfo.isAgree" @click="agree" type="primary" size="large">通过验证</mt-button>
       <mt-button v-if="friendInfo&&friendInfo.isAgree" @click="getMessage"  type="primary" size="large">发送消息</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PrevTop from "com/prevTop/prevTop";
import { ImagePreview } from "vant";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      friendInfo: null
    };
  },
  mounted() {
    console.log(this.$route.params.requestname);
    let requestname = this.$route.params.requestname;
    this.$http({
      method: "GET",
      url: "/api/agreeFriendInfo",
      params: {
        requestname
      }
    }).then(res => {
      let data = res.data;
      if (data.success) {
        this.friendInfo = data.data;
      }
    });
  },
  methods: {
    preview: function() {
      ImagePreview({
        images: [this.friendInfo.avatar],
        startPosition: 1,
        onClose() {
          // do something
        }
      });
    },
    agree: function(){
      this.$http({
        method: 'POST',
        url: '/api/agreeRequest',
        data:{
          requestname: this.friendInfo.name,
          friendname: this.$store.state.userInfo.username
        }
      }).then(res => {
        console.log(res)
      })
    },
    getMessage: function(){
      this.$router.push({name: 'messagebox', params:{friendname: this.friendInfo.name,friendnickname:this.friendInfo.nickname}})
    }
  },
  components: {
    PrevTop
  }
};
</script>

<style lang="less" >
.van-modal {
  background-color: #000;
}
.userinfo {
  position: relative;
  height: 80px;
  width: 100%;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 80px;
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 3px;
    img {
      width: 100%;
    }
  }
}
.account {
  margin-left: 20px;
  height: 40px;

  .nickname {
    font-size: 15px;
    display: flex;
    align-items: flex-end;
    span {
      display: inline-block;
      line-height: 15px;
      height: 15px;
    }
  }
}
.submit{

  width: 90%;
  margin: 0 auto;
    margin-top: 20px;
}
</style>
