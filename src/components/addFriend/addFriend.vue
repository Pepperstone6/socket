<template>
  <div id="detail">
    <prev-top title="详细资料"></prev-top>
    <div class="userinfo">
      <div @click="magnify" class="icon">
        <img v-if="friendInfo" :src="friendInfo.avatar" alt="">
      </div>
      <div class="account">
        <div v-if="friendInfo" class="nickname">
          <span >{{friendInfo.nickname}}</span><icon width="20" height="15" :name="friendInfo.sex == 0 ? 'man':'woman'"></icon>
        </div>
        <div class="username">
          逗比号：<span v-if="friendInfo">{{friendInfo.username}}</span> 
        </div>
      </div>
    </div>
    <div class="submit-wrap">
      <mt-button @click.native="addFriend" size="large" type="primary">添加到通讯录</mt-button>
    </div>
    <avatar-popup v-if="friendInfo" :avatar="friendInfo.avatar" :popupVisible="isShow" :closePopup="closeAvatar"></avatar-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);

import { getSession, setSession } from "@/assets/util/util.js";
import PrevTop from "com/prevTop/prevTop";
import AvatarPopup from "com/avatarPopup/avatarPopup";

export default {
  data() {
    return {
      friendInfo: null,
      isShow: false
    };
  },
  mounted() {
    this.friendInfo = this.$route.params.friendInfo || getSession("friendInfo");
    if (!getSession("friendInfo")) {
      setSession("friendInfo", this.friendInfo);
    }
  },
  methods: {
    closeAvatar: function(isShow) {
      this.isShow = isShow;
    },
    magnify: function() {
      this.isShow = true;
    },
    addFriend: function(ev){
      const _this = this
      this.$router.push({name:'requestadd',params:{
        friendusername: _this.friendInfo.username,
        requestname: _this.$store.state.userInfo.username, 
        avatar: _this.friendInfo.avatar,
        requestnickname: _this.$store.state.userInfo.nickname}})
    }
  },
  components: {
    PrevTop,
    AvatarPopup
  }
};
</script>

<style lang="less" scoped>
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
  .username {
    color: #999;
    font-size: 12px;
    line-height: 20px;
    margin-top: 5px;
    span {
      padding-left: 10px;
    }
  }
}
.submit-wrap {
  width: 90%;
  margin: 50px auto 0;
}
</style>
