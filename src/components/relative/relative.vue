<template>
  <div id="relative">
    <div class="relative-header">
      <h2>通讯录</h2>
      <div @click="addFriend" class="icon-wrap">
        <icon name="add_btn" width="25" height="25"></icon>
      </div>
    </div>
    <div @click="showSearch" class="search">
      <icon name="search" width="20" height="20"></icon><span>搜索</span>  
    </div>
    <div @click="getAgreeFriend" class="friend-wrap">
      <div class="friend-icon"><icon width="20" height="20" name="friend"></icon></div><span>新的朋友</span>
    </div>
    <mt-index-list>
      <template v-if="friendObj">
        <mt-index-section v-for="(item,index) in Object.keys(friendObj)" :key="index" :index="item">
        <mt-cell class="cell-wrap" v-for="key in friendObj[item]" :key="key['_id']">
            <div class="friend">
              <img :src="key.avatar" alt="">
              <span>{{key.nickname}}</span>
            </div>
        </mt-cell>
        </mt-index-section>
      </template>
      <!-- <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section> -->
    </mt-index-list>
    <popup :popupVisible="isShow" :closePopup="closePopup"></popup> 
  </div>
</template>
<script>
import Vue from "vue";
import { IndexList, IndexSection, Cell } from "mint-ui";
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);

import AddPopup from "com/addPopup/addPopup";
import Popup from "com/popup/popup";
export default {
  data() {
    return {
      isShow: false,
      activeNames: ["1"],
      friendObj: null
    };
  },
  mounted() {
    this.$http({
      method: 'GET',
      url: '/api/getFriend',
      params: {
        username: this.$store.state.userInfo.username
      }
    }).then(res => {
      let data = res.data
      if(data.success){
        let arr =  data.data
        let friendObj = {}
        arr.forEach((item, index) => {
          if(typeof friendObj[item.chat] === 'undefined'){
            friendObj[item.chat] = []
            friendObj[item.chat].push(item)
          }else{
            friendObj[item.chat].push(item)
          }
        })
      let letter = Object.keys(friendObj).sort()
      let obj2 = {}
      letter.forEach((item, index) => {
        if(item === "#"){
          return
        }
        obj2[item] = friendObj[item]
      })
      if(typeof friendObj['#'] !== 'undefined'){
        obj2['#'] = friendObj['#']
      }
      console.log(obj2)
        this.friendObj = obj2
      }
    })
  },
  methods: {
    getAgreeFriend: function(){
      this.$router.push({path: '/agreefriend'})
    },
    showSearch: function() {
      // this.$router.push('/search')
      this.isShow = true;
    },
    closePopup: function(isShow) {
      this.$set(this, "isShow", isShow);
    },
    addFriend: function() {
      //  this.isAdd=true
      this.$router.push("/search");
      // this.$set(this,'isAdd', isAdd)
    }
  },
  components: {
    Popup,
    AddPopup
  }
};
</script>
<style lang="less" scoped>
.cell-wrap{
 .mint-cell-value{
    width: 100%;
  }
}

.relative-header {
  width: 100%;
  height: 50px;
  position: relative;
  background: #26a2ff;
  overflow: hidden;
  .icon-wrap {
    position: absolute;
    right: 10px;
    top: 12.5px;
  }
  h2 {
    font-size: 18px;
    color: #fff;
    line-height: 50px;
    margin: 0 auto;
    font-weight: normal;
    text-align: center;
  }
}
.search {
  width: 98%;
  margin: 5px auto;
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
.friend-wrap {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 10px;
  .friend-icon {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d88f46;
  }
  span{
    margin-left: 10px;
    color: #333;
  }
}

.friend{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    display: block;
    width: 40px;
    height: 40px;
  }
  span{
    color: #333;
    margin-left: 10px;
  }
}
</style>
