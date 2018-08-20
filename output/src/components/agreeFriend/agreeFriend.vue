<template>
  <div>
    <prev-top title="新的朋友"></prev-top>
    <div @click="showSearch" class="search">
      <icon name="search" width="20" height="20"></icon><span>搜索</span>  
    </div>
    <div>
        <div class="card">
            <img src="" alt="">
        </div>
    </div>
    <popup :popupVisible="isShow" :closePopup="closePopup"></popup> 
  </div>
</template>

<script>

import PrevTop from 'com/prevTop/prevTop'
import Popup from "com/popup/popup";
export default {
  data(){
    return {
      isShow: false
    }
  },
  components:{
    PrevTop,
    Popup
  },
  methods:{
    showSearch: function() {
      // this.$router.push('/search')
      this.isShow = true;
    },
    closePopup: function(isShow) {
      this.$set(this, "isShow", isShow);
    }
  },
  mounted(){
    const _this = this
    this.$http({
      method: 'GET',
      url: '/api/getRequestFriend',
      params: {
        username: _this.$store.state.userInfo.username
      }
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 98%;
  margin: 5px auto;
  margin-top: 45px;
  background: #f0f0f0;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf;
  }
}
  
</style>

