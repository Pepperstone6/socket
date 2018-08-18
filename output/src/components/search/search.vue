
<template>
  <div>
    <prev-top title="添加朋友"></prev-top> 
    <div @click="addFriend" class="search">
      <icon name="search" width="20" height="20"></icon>
      <!-- <mt-field placeholder="搜索" :clearable='false'></mt-field> -->
      <span>搜索</span>
    </div>
     <add-popup :isAdd="isAdd" :closeFriend="closeFriend"></add-popup>
  </div> 
</template>

<script>
import PrevTop from 'com/prevTop/prevTop'
import AddPopup from 'com/addPopup/addPopup'
import Vue from 'vue'
import {Field} from 'mint-ui'
Vue.component(Field.name, Field);
export default {
  data(){
      return{
        isAdd: false
      }
    },
  methods:{
    addFriend: function(){
      console.log(1212)
      this.isAdd = true
    },
    closeFriend: function(isAdd){
      this.$set(this,'isAdd', isAdd)
    }
  },
  components: {
    PrevTop,
    AddPopup
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 98%;
 overflow: hidden;
  margin: 5px auto;
   margin-top: 45px;
  background: #F0F0F0;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }
  .mint-cell-wrapper{
    height: 25px;
    margin: 0;
    padding: 0;
    input{
      background-color: #f0f0f0;
    }
  }
}
</style>
