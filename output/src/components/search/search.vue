
<template>
  <div>
    <prev-top title="查找"></prev-top> 
    <div class="search">
      <icon name="search" width="20" height="20"></icon>
      <mt-field placeholder="搜索" :clearable='false'></mt-field>
    </div>
  </div> 
</template>

<script>
import PrevTop from 'com/prevTop/prevTop'
import Vue from 'vue'
import {Field} from 'mint-ui'
Vue.component(Field.name, Field);
export default {
  components: {
    PrevTop,
    
  }
}
</script>

<style lang="less">
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
