<template>
  <div id="detail">
    <prev-top title="详细资料"></prev-top>
    <div class="userinfo">
      <div @click="magnify" class="icon">
        <img v-if="friendInfo" :src="friendInfo.avatar" alt="">
      </div>
      <div class="account">
        <div class="nickname">
          <span v-if="friendInfo">{{friendInfo.nickname}}</span><icon width="20" height="13" :name="friendInfo.sex == 0 ? 'man':'woman'"></icon>
        </div>
        <div class="username">
          逗比号：<span v-if="friendInfo">{{friendInfo.username}}</span> 
        </div>
      </div>
    </div>
    <avatar-popup v-if="friendInfo" :avatar="friendInfo.avatar" :popupVisible="isShow" :closePopup="closeAvatar"></avatar-popup>
  </div>
</template>

<script>
import { getSession, setSession } from "@/assets/util/util.js";
import PrevTop from "com/prevTop/prevTop";
import AvatarPopup from 'com/avatarPopup/avatarPopup'
export default {
  data() {
    return {
      friendInfo: null,
      isShow:false
    };
  },
  mounted() {
    this.friendInfo = this.$route.params.friendInfo || getSession("friendInfo");
    if (!getSession("friendInfo")) {
      setSession("friendInfo", this.friendInfo);
    }
  },
  methods:{
    closeAvatar: function(isShow){
       this.isShow=isShow
    },
    magnify: function(){
      this.isShow=true
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
  height: 45px;

  .nickname {
    font-size: 15px;
    display: flex;
    align-items: baseline;
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
    span{
      padding-left: 10px;
    }
  }
}
</style>
