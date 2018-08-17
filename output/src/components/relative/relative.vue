<template>
  <div>
    <div class="relative-header">
      <h2>通讯录</h2>
      <div @click="addFriend" class="icon-wrap">
        <icon name="add_btn" width="25" height="25"></icon>
      </div>
    </div>
    <div @click="showSearch" class="search">
      <icon name="search" width="20" height="20"></icon><span>搜索</span>  
    </div>
    <mt-index-list>
      <mt-index-section index="A">
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
      </mt-index-section>
    </mt-index-list>
    <popup :popupVisible="isShow" :closePopup="closePopup"></popup> 
    <add-popup :isAdd="isAdd" :closeFriend="closeFriend"></add-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import { IndexList, IndexSection,Cell } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
import AddPopup from 'com/addPopup/addPopup'
import Popup from 'com/popup/popup'
export default {
  data(){
    return{
      isShow:false,
      isAdd: false
    }
  },
  // mounted(){
  //   this.$http({
  //     method: 'GET',
  //     url: '/getFriend'
  //   }).then(res => {
  //     console.log(res)
  //   })
  // }
  methods:{
    showSearch: function(){
      // this.$router.push('/search')
      this.isShow=true
    },
    closePopup:function(isShow){
      this.$set(this,'isShow', isShow)
    },
    addFriend: function(){
       this.isAdd=true
      // this.$set(this,'isAdd', isAdd)
    },
    closeFriend: function(isAdd){
      this.$set(this,'isAdd', isAdd)
    }
  },
  components:{
    Popup,
    AddPopup
  }
}
</script>
<style lang="less">
.relative-header{
  width: 100%;
  height: 50px;
 position: relative;
  background:#26a2ff;
  overflow: hidden;
  .icon-wrap{
    position: absolute;
    right: 10px;
    top:12.5px;
  }
  h2{
    font-size: 18px;
    color: #fff;
    line-height: 50px;
    margin: 0 auto;
    font-weight: normal;
    text-align: center;
  }
}
.search{
  width: 98%;
  margin: 5px auto;
  background: #F0F0F0;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }
}
</style>
